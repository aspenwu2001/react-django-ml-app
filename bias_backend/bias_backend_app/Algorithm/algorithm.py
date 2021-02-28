import numpy as np
from sklearn.decomposition import PCA
import gensim
import gensim.downloader as api
from gensim.models.word2vec import Word2Vec
from gensim.models import KeyedVectors
import werkzeug
from nltk.tokenize import TweetTokenizer
# import modelFactory
import json
import csv
import string
import os
workpath = os.path.dirname(os.path.abspath(__file__))

class biasAlgorithm:

    def __init__(self,model):
        self.__model = model
        pairlist = list(csv.reader(open(os.path.join(workpath, 'GenderBiasPair.csv'),'r')))
        temp = []
        for x in pairlist:
           temp.append((x[0],x[1]))
        self.__biased_word_pairs =temp
        self.__process_data()

    def estimate(self,index):
        if(index >= 1.5 or index <= -1.5):
            return "Highly Biased"
        elif(index >= 1.05 or index <= -1.05):
            return "Intermediatly Biased"
        elif(index >= 1 or index <= -1):
            return "Lowly Biased"
        else:
            return "Unbiased"

    def reload_new_source(self,newsource):
        self.source = newsource
        self.__model = gensim.models.KeyedVectors.load_word2vec_format(self.source, binary=True)

    def __process_data(self):
        biasedPairs = []
        for pair in self.__biased_word_pairs:
            try:
                biasedPairs.append((self.__model[pair[0]], self.__model[pair[1]]))
            except:
                print(pair[0] + " and " + pair[1] + "are not in the web embedding")

        biases = [pair[0] - pair[1] for pair in biasedPairs]
        reversed_biases = [pair[1] - pair[0] for pair in biasedPairs]
        self.__pca = PCA(n_components=1)
        self.__pca.fit(np.array(biases + reversed_biases))
        self.__bias_mean_one = np.mean(self.__pca.transform(np.array([pair[0] for pair in biasedPairs])))
        self.__bias_mean_two = np.mean(self.__pca.transform(np.array([pair[1] for pair in biasedPairs])))

    def add_pair(self,newpair):
        self.__biased_word_pairs.extend(newpair)
        self.__process_data()

    def __detect_bias_pca(self,word):
        if word not in self.__model:
            return None
        word_val = self.__pca.transform(np.array([self.__model[word]]))[0][0]
        return (word_val - (self.__bias_mean_two + self.__bias_mean_one) / 2) * 2 / (self.__bias_mean_two - self.__bias_mean_one)

    def detect(self,sentence):

        if not sentence:
            raise werkzeug.exceptions.BadRequest("You must provide a sentence param")
        if len(sentence) > 500:
            raise werkzeug.exceptions.BadRequest(
                "Sentence must be at most 500 characters long"
            )

        tokenizer = TweetTokenizer()
        tokens = tokenizer.tokenize(sentence)
        # table = str.maketrans('', '', string.punctuation)
        # tokens = [w.translate(table) for w in tokens]
        formattedTokens = [word.lower() for word in tokens]
        results = []
        for token in formattedTokens:
            index = self.__detect_bias_pca(token)
            token_result = {"original": tokens[formattedTokens.index(token)],"token": token, "bias":index,"status": self.estimate(index)}
            results.append(token_result)
        return json.dumps({"results": results},ensure_ascii=False)
if __name__ == "__main__":

    # cc = wordpair.word_pairs()
    # print(cc.gender_pair)

    bd = biasAlgorithm();#biased_word_pairs);
    print(bd.detect("girl with Man artist actor actress work an the so"))
    print(bd.detect("man, MAN"))
    print(bd.detect("GIRL"))
    print(bd.detect("GIrl"))
    print(bd.detect("GIRl"))
    #bd.add_pair([("girl", "boy"),("actor","actress")])
    #print(bd.detect("girl boy"))
    #bd.add_pair([("girl", "boy"),("actor","actress")])
    #print(bd.detect("girl boy"))
