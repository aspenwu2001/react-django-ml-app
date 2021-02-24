import numpy as np
from sklearn.decomposition import PCA
import gensim
import gensim.downloader as api
from gensim.models.word2vec import Word2Vec
import gensim.downloader as api


class model:
    def __init__(self,type):
        info = api.info()
        #type = 0 pretrained model, type = 1 online training model
        self.type = type
        self.preTrainedModelList = list(info['models'].keys())
        self.corporaList = list(info['corpora'].keys())
        self.ListSelection = 0
        self.model = ""

    def getPretrainedModelList(self):
        return self.preTrainedModelList

    def getCorporaList(self):
        return self.corporaList

    def getModel(self):
        return self.model

    def getType(self):
        return self.type

    def ChangeType(self,type):
        self.type = type

    def ListSelect(self,select):
        self.ListSelection = select

    def generateModel(self):
        if self.type == 0:
            self.model = api.load(self.preTrainedModelList[int(self.ListSelection)])
        elif self.type == 1:
            corpus = api.load(self.corporaList[int(self.ListSelection)])
            self.model = Word2Vec(corpus).wv



            



if __name__ == "__main__":
    cc = model(0)

