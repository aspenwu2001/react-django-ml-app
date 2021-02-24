import numpy as np
from sklearn.decomposition import PCA
import gensim
import gensim.downloader as api
from gensim.models.word2vec import Word2Vec
import werkzeug
from nltk.tokenize import TweetTokenizer
import modelFactory
import json
import csv
import string

class bias_detect:

    def __init__(self):
        self.modelFactory = modelFactory.model(0)
        print(self.modelFactory.getPretrainedModelList())
        select = input("select model")
        self.modelFactory.ListSelect(select)
        self.modelFactory.generateModel()
        self.model = self.modelFactory.getModel()
        # info = api.info()
        # list(info['models'].keys())
        # corpus = api.load('text8')  # download the corpus and return it opened as an iterable
        # self.model =  Word2Vec(corpus).wv  # train a model from the corpus  # train a model from the corpus
        pairlist = list(csv.reader(open('GenderBiasPair.csv','r')))
        temp = []
        for x in pairlist:
           temp.append((x[0],x[1]))
        self.biased_word_pairs =temp
        self.process_data()

    def reload_new_source(self,newsource):
        self.source = newsource
        self.model = gensim.models.KeyedVectors.load_word2vec_format(self.source, binary=True)

    def process_data(self):
        self.biased_pairs = []
        for pair in self.biased_word_pairs:
            try:
                self.biased_pairs.append((self.model[pair[0]], self.model[pair[1]]))
            except:
                print(pair[0] + " and " + pair[1] + "are not in the web embedding")

        self.biases = [pair[0] - pair[1] for pair in self.biased_pairs]
        self.reversed_biases = [pair[1] - pair[0] for pair in self.biased_pairs]
        self.pca = PCA(n_components=1)
        self.pca.fit(np.array(self.biases + self.reversed_biases))
        self.bias_mean_one = np.mean(self.pca.transform(np.array([pair[0] for pair in self.biased_pairs])))
        self.bias_mean_two = np.mean(self.pca.transform(np.array([pair[1] for pair in self.biased_pairs])))

    def add_pair(self,newpair):
        self.biased_word_pairs.extend(newpair)
        self.process_data()

    def detect_bias_pca(self,word):
        if word not in self.model:
            return None
        word_val = self.pca.transform(np.array([self.model[word]]))[0][0]
        return (word_val - (self.bias_mean_two + self.bias_mean_one) / 2) * 2 / (self.bias_mean_two - self.bias_mean_one)

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
        tokens = [word.lower() for word in tokens]
        results = []
        for token in tokens:
            token_result = {"token": token, "bias": self.detect_bias_pca(token)}
            results.append(token_result)
        return json.dumps({"results": results},ensure_ascii=False)
if __name__ == "__main__":

    # cc = wordpair.word_pairs()
    # print(cc.gender_pair)

    bd = bias_detect();#biased_word_pairs);
    print(bd.detect("girl with Man work"))
    print(bd.detect("man, MAN"))
    print(bd.detect("GIRL"))
    print(bd.detect("GIrl"))
    print(bd.detect("GIRl"))
    #bd.add_pair([("girl", "boy"),("actor","actress")])
    #print(bd.detect("girl boy"))
    #bd.add_pair([("girl", "boy"),("actor","actress")])
    #print(bd.detect("girl boy"))
