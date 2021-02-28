from gensim.models import KeyedVectors
import algorithm
import modelFactory

def model_init():
    # modelF = modelFactory.model(0)
    # print(modelF.getPretrainedModelList())
    # select = input("select model")
    # modelF.ListSelect(select)
    # modelF.generateModel()
    # model = modelF.getModel()
    model = KeyedVectors.load_word2vec_format(
    "C:\\Users\\ASUS\\PycharmProjects\\Algorithm\\GoogleNews-vectors-negative300.bin.gz", binary=True)
    return model

def processingSentence(sentence):
    model = model_init()
    algo = algorithm.biasAlgorithm(model)
    result = algo.detect(sentence)
    return result



if __name__ == "__main__":
    print(processingSentence("girl with Man artist actor actress work an the so"))
