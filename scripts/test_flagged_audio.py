import io,json,math,os,shutil,struct,tempfile,threading,unittest,wave
from pathlib import Path
from unittest.mock import patch
import repair_flagged_audio as batch

class PhoneticChecks(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.entries={e['label']:e for e in json.loads((batch.ROOT/'cedar-flagged-batch.json').read_text())['entries']}

    def test_qaf_must_be_audible(self):
        e=self.entries['hotels']
        r={'uncertain':False,'word_endings':[{'word_arabic':'فنادق','phonetic':'fanādiq','ending':'consonant'}]}
        self.assertTrue(batch.check_review(r,e))
        for wrong in ['fanādit','fanādik','fanādi','fanādiqu']:
            r['word_endings'][0]['phonetic']=wrong
            with self.assertRaises(ValueError):batch.check_review(r,e)

    def test_added_vowel_in_consonant_cluster(self):
        e=self.entries['I was appointed']
        r={'uncertain':False,'word_endings':[{'word_arabic':'عُيِّنْتُ','phonetic':'ʿuyyintu','ending':'u'}]}
        self.assertTrue(batch.check_review(r,e))
        r['word_endings'][0]['phonetic']='ʿuyyinatu'
        with self.assertRaises(ValueError):batch.check_review(r,e)

    def test_explicit_final_vowel_is_required(self):
        e=self.entries['since; ago']
        r={'uncertain':False,'word_endings':[{'word_arabic':'منذُ','phonetic':'mundhu','ending':'u'}]}
        self.assertTrue(batch.check_review(r,e))
        r['word_endings'][0].update(phonetic='mundh',ending='consonant')
        with self.assertRaises(ValueError):batch.check_review(r,e)

    def test_ayn_cannot_be_silently_inferred(self):
        e=self.entries['I help']
        r={'uncertain':False,'word_endings':[{'word_arabic':'أساعدُ','phonetic':'ʾusāʿidu','ending':'u'}]}
        self.assertTrue(batch.check_review(r,e))
        for wrong in ['ʾusāidu','ʾuʾusāʿidu']:
            r['word_endings'][0]['phonetic']=wrong
            with self.assertRaises(ValueError):batch.check_review(r,e)

    def test_construct_t_without_case_vowel(self):
        e=self.entries['basketball']
        r={'uncertain':False,'word_endings':[{'word_arabic':'كرة','phonetic':'kurat','ending':'consonant'},
            {'word_arabic':'السلة','phonetic':'as-salla','ending':'a'}]}
        self.assertTrue(batch.check_review(r,e))
        for wrong,ending in [('kura','a'),('kuratu','u')]:
            r['word_endings'][0].update(phonetic=wrong,ending=ending)
            with self.assertRaises(ValueError):batch.check_review(r,e)

    def test_interdental_emphatic_not_plain_z(self):
        e=self.entries['beliefs; suppositions']
        r={'uncertain':False,'word_endings':[{'word_arabic':'ظنون','phonetic':'ẓunūn','ending':'consonant'}]}
        self.assertTrue(batch.check_review(r,e))
        r['word_endings'][0]['phonetic']='zunūn'
        with self.assertRaises(ValueError):batch.check_review(r,e)

class BoundedBatch(unittest.TestCase):
    def test_persistent_cap_and_unchanged_unrelated_recordings(self):
        original=batch.ROOT
        config=json.loads((original/'cedar-flagged-batch.json').read_text())
        entries={e['speechInput']:e for e in config['entries']}
        local=threading.local();calls={'speech':0,'review':0};lock=threading.Lock()
        wav=io.BytesIO()
        with wave.open(wav,'wb') as out:
            out.setparams((1,2,24000,0,'NONE','not compressed'))
            out.writeframes(b'\0\0'*2400+b''.join(struct.pack('<h',int(4000*math.sin(2*math.pi*440*i/24000))) for i in range(12000))+b'\0\0'*2400)
        def fake_post(url,body,key,binary=False):
            if url.endswith('/audio/speech'):
                with lock:calls['speech']+=1
                local.entry=entries[body['input']]
                return wav.getvalue()
            with lock:calls['review']+=1
            # One successful mocked entry, all other candidates fail conservatively.
            if local.entry['label']=='government':
                review={'uncertain':False,'word_endings':[{'word_arabic':'حكومة','phonetic':'ḥukūma','ending':'a'}]}
            else:review={'uncertain':True,'word_endings':[]}
            return {'choices':[{'message':{'content':json.dumps(review)}}],'usage':{'total_tokens':1}}
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);dest=root/'audio/cedar-vocab'
            shutil.copytree(original/'audio/cedar-vocab',dest)
            for name in ['cedar-flagged-batch.json','cedar-vocab-targets.json','cedar-vocab-pronunciation.json','cedar-vocab-audio.js']:
                shutil.copyfile(original/name,root/name)
            with patch.object(batch,'ROOT',root),patch.object(batch,'DEST',dest),patch.object(batch,'REPORT',root/'reports/cedar-flagged-29-repair.json'),patch.object(batch,'post',side_effect=fake_post),patch.dict(os.environ,{'OPENAI_API_KEY':'mock-key'}):
                batch.main()
                self.assertEqual(calls,{'speech':55,'review':55})
                report=json.loads(batch.REPORT.read_text())
                self.assertEqual((report['accepted'],report['trimmed'],report['unresolved'],report['outOfScopeChanges']),(1,1,27,0))
                batch.main()
                self.assertEqual(calls,{'speech':55,'review':55})

if __name__=='__main__':unittest.main()
