import numpy as np
from gensim.models import KeyedVectors
from sklearn.decomposition import PCA
import gensim
import gensim.downloader as api
from gensim.models.word2vec import Word2Vec
import gensim.downloader as api


class model:
    def __init__(self):

        info = api.info()
        self.__type = None
        self.__ListSelection = None
        self.__model = None
        self.__address = None
        self.__preTrainedModelList = list(info['models'].keys())
        self.__corporaList = list(info['corpora'].keys())

    def getPretrainedModelList(self):
        return self.__preTrainedModelList

    def getCorporaList(self):
        return self.__corporaList

    def getModel(self):
        return self.__model

    def getType(self):
        return self.__type
#type = 0 pretrained model, type = 1 online training model
    def setType(self,type):
        self.__type = type

    def listSelect(self,select):
        self.__ListSelection = select

    def localModelAddress(self,address):
        self.__address = address

    def generateModel(self):
        if self.__type == 0:
            self.__model = api.load(self.__preTrainedModelList[int(self.__ListSelection)])
        elif self.__type == 1:
            corpus = api.load(self.__corporaList[int(self.__ListSelection)])
            self.__model = Word2Vec(corpus).wv
        elif self.__type == 2:
            self.__model = KeyedVectors.load_word2vec_format(self.__address, binary=True)



