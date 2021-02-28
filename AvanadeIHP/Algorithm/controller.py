from gensim.models import KeyedVectors
import algorithm
import modelFactory

def model_init(type):
    #type = 0 online pretrained model, type = 1 online training corpus, type = 2 local pretrained model
    modelF = modelFactory.model()
    modelF.setType(type)
    if type == 0:
        print(modelF.getPretrainedModelList())
        select = input("select model or corpus")
        modelF.listSelect(select)
    elif type == 1:
        print(modelF.getCorporaList())
        select = input("select model or corpus")
        modelF.listSelect(select)
    elif type == 2:
        modelF.localModelAddress("C:\\Users\\ASUS\\PycharmProjects\\Algorithm\\GoogleNews-vectors-negative300.bin.gz")
    modelF.generateModel()
    model = modelF.getModel()
    return model



def processingSentence(sentence,type):
    model = model_init(type)
    print(model)
    algo = algorithm.biasAlgorithm(model)
    result = algo.detect(sentence)
    return result



if __name__ == "__main__":
    print(processingSentence("girl with Man artist actor actress work an the so",0))
