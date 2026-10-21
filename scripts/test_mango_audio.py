import unittest
from cedar_mango import check,equivalence
class MangoAudioTests(unittest.TestCase):
 def test_idaafa_requires_t_not_a_or_case(self):
  e={'ar':'اِمْرَأَة إِطْفَاء','spoken':'اِمْرَأَة إِطْفَاء'}
  r={'uncertain':False,'word_endings':[{'word_arabic':'امرأة','phonetic':'imraʾat','ending':'consonant'},{'word_arabic':'إطفاء','phonetic':'iṭfāʾ','ending':'consonant'}]}
  self.assertTrue(check(r,e))
  for ph,end in [('imraʾa','a'),('imraʾatu','u')]:
   r['word_endings'][0].update(phonetic=ph,ending=end)
   with self.assertRaises(ValueError):check(r,e)
 def test_adjective_does_not_link_t(self):
  e={'ar':'وَصْفَة طِبِّيَّة','spoken':'وَصْفَة طِبِّيَّة'}
  r={'uncertain':False,'word_endings':[{'word_arabic':'وصفة','phonetic':'waṣfa','ending':'a'},{'word_arabic':'طبية','phonetic':'ṭibbiyya','ending':'a'}]}
  self.assertTrue(check(r,e))
  r['word_endings'][0].update(phonetic='waṣfat',ending='consonant')
  with self.assertRaises(ValueError):check(r,e)
 def test_equivalence_preserves_vowels_and_shadda(self):
  self.assertEqual(equivalence('أَسْتَدِيرُ'),equivalence('أَستَدِيرُ'))
  self.assertNotEqual(equivalence('عَلَم'),equivalence('عِلْم'))
  self.assertNotEqual(equivalence('عَلَم'),equivalence('عَلَّم'))
if __name__=='__main__':unittest.main()
