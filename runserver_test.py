import os
import runserver
import unittest
import tempfile

class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        """Before each test, set up a blank database"""
        runserver.app.config['TESTING'] = True
        self.app = runserver.app.test_client()
    
    # testing functions
    def test_app(self):
        rv = self.app.get('/')
        assert b'Python Uruguay' in rv.data
     
if __name__ == '__main__':
    unittest.main()