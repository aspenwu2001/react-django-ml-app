import unittest

from Algorithm.ocr import OCR
from Algorithm.controller import maincontroller

class TestDemo(unittest.TestCase):
    """Test mathfuc.py"""

    @classmethod
    def setUpClass(cls):
        print ("this setupclass() method only called once.\n")

    @classmethod
    def tearDownClass(cls):
        print ("this teardownclass() method only called once too.\n")

    def setUp(self):
        print ("do something before test : prepare environment.\n")

    def tearDown(self):
        print ("do something after test : clean up.\n")

    def testOCR(self):
        """Test OCR Part"""
        ocr = OCR()

        self.assertEqual(ocr.readimage("testFile/TestPDF.pdf"), 'Test OCR Is work correctly\n')
        self.assertEqual(ocr.readimage("testFile/TestJPG.JPG"), 'Test OCR Is work correctly\n')
        self.assertEqual(ocr.readimage("testFile/TestPNG.PNG"), 'Test OCR Is work correctly\n')


    def testAlgorithm(self):
        """Test method minus(a, b)"""
        controller = maincontroller()
        controller.setType(2)
        controller.initialise()
        sentence = "girl is an actress"
        result = controller.processSentence(sentence)
        self.assertTrue(str(result).__contains__('result'))

    @unittest.skip("do't run as not ready")
    def test_minus_with_skip(self):
        """Test method minus(a, b)"""


if __name__ == '__main__':
    # verbosity=*：默认是1；设为0，则不输出每一个用例的执行结果；2-输出详细的执行结果
    unittest.main(verbosity=2)
