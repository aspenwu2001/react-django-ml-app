from gensim.models import KeyedVectors
import algorithm
import modelFactory

class maincontroller:
    def __init__(self):
        self.__modelFactory = modelFactory.model()
        self.__algo = None
        self.__biasPairAddress = 'GenderBiasPair.csv'

# Model related functions
    def setType(self,type): #Set model type : type = 0 online pretrained model, type = 1 online training corpus, type = 2 Url pretrained model
        self.__modelFactory.setType(type)

    def setModelSelection(self,select): #set model of corpus selection based on the lists returned by method: getPretrainedModelList() and getCorporaList()
        self.__modelFactory.setSelect(select)

    def getModel(self):# return model in factory
        return self.__modelFactory.getModel()

    def getPretrainedModelList(self):# get name list of pretrained model
        return self.__modelFactory.getPretrainedModelList()

    def getCorporaList(self):# get name list of corpus that used to train model
        return self.__modelFactory.getCorporaList()

    def changeModel(self):
        self.modelSetting()
        self.__algo.changeModel(self,self.__modelFactory.getModel)

    def changeUrl(self,address):
        self.__modelFactory.setlocalModelAddress(address)

    # def train(self):
    #     self.__modelFactory.trainModel()

    def modelSetting(self): #initialised the model & change the model
        #type = 0 online pretrained model, type = 1 online training corpus, type = 2 Url pretrained model
        self.__modelFactory.generateModel()

#----------------------------------------

#Algorithm related functions
    def algorithm_init(self): #initialise the algorithm structure
        self.__algo = algorithm.biasAlgorithm(self.__modelFactory.getModel(),self.__biasPairAddress)

    #Bias pair related functions
    def setBiasPair(self,address):
        self.__biasPairAddress =address
        self.__algo.changeBiasPair(self.__biasPairAddress)

    def addBiasPair(self,biasPair):
        self.__algo.add_pair(biasPair)
    #------------------------------

#----------------------------------------

#Running functions
    def initialise(self):
        self.modelSetting()
        self.train()
        self.algorithm_init()

    def processSentence(self,sentence):
        result = self.__algo.detect(sentence)
        return result

#----------------------------------------

if __name__ == "__main__":
    cc = maincontroller()
    print(cc.getCorporaList())
    cc.setType(1)
    cc.initialise()

    print(cc.processSentence("girl with Man artist actor actress work an the so"))
