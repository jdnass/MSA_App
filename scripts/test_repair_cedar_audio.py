import unittest
from repair_cedar_audio import speech_text, validate

def review(word, phonetic, ending):
    return {"uncertain": False, "word_endings": [{"word_arabic": word, "phonetic": phonetic, "ending": ending}]}

class LiteralAudioTests(unittest.TestCase):
    def test_pronunciation_marks_preserve_explicit_vowels(self):
        self.assertEqual(speech_text("أَسْكُنُ حَقًّا لِ عَمّ"), "أَسْكُنُ حَقًّا لِ عَمّْ")

    def test_long_vowel_before_consonant(self):
        self.assertTrue(validate(review("كليات", "kulliyyāt", "consonant"), "كُلِّيَّات"))
        self.assertTrue(validate(review("قانون", "qānūn", "consonant"), "قَانُون"))

    def test_reject_added_case_ending(self):
        for word,phonetic,label in [("قانونٌ","qānūnun","un"),("قانونُ","qānūnu","u")]:
            with self.assertRaises(ValueError): validate(review(word,phonetic,label),"قَانُون")
        with self.assertRaises(ValueError): validate(review("قانون","qānūnun","un"),"قَانُون")

    def test_reject_contradictory_phonetic_and_label(self):
        with self.assertRaises(ValueError): validate(review("قانون","qānūnu","consonant"),"قَانُون")

    def test_preserve_explicit_final_vowel(self):
        self.assertTrue(validate(review("أسكنُ","askunu","u"),"أَسْكُنُ"))
        with self.assertRaises(ValueError): validate(review("أسكن","askun","consonant"),"أَسْكُنُ")

    def test_pausal_taa(self):
        self.assertTrue(validate(review("زوجة","zawja","a"),"زَوْجَة"))
        for phonetic,label in [("zawjat","consonant"),("zawjatu","u")]:
            with self.assertRaises(ValueError): validate(review("زوجة",phonetic,label),"زَوْجَة")

    def test_wrong_word_and_extra_speech(self):
        with self.assertRaises(ValueError): validate(review("أصابع","aṣābiʿ","consonant"),"أَسَابِيع")
        r=review("أزواج","azwāj","consonant")
        r["word_endings"]*=2
        with self.assertRaises(ValueError): validate(r,"أَزْوَاج")

    def test_construct_t_is_not_a_case_vowel(self):
        r={"uncertain":False,"word_endings":[
            {"word_arabic":"إدارة","phonetic":"idārat","ending":"consonant"},
            {"word_arabic":"الأعمال","phonetic":"al-aʿmāl","ending":"consonant"}]}
        self.assertTrue(validate(r,"إِدارة الأَعْمال"))
        r["word_endings"][0].update(phonetic="idāratu",ending="u")
        with self.assertRaises(ValueError):validate(r,"إِدارة الأَعْمال")

    def test_uncertain_recording(self):
        r=review("أزواج","azwāj","consonant"); r["uncertain"]=True
        with self.assertRaises(ValueError): validate(r,"أَزْوَاج")

if __name__ == "__main__": unittest.main()
