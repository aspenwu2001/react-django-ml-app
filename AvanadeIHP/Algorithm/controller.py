from Algorithm.algorithm import biasAlgorithm
from Algorithm.modelFactory import model
from Algorithm.ocr import OCR



class maincontroller:
    def __init__(self):
        self.__modelFactory = model()
        self.__algo = None
        self.__biasPairAddress = ''
        self.__result = {"results": [{"original": "ui", "token": "cv", "bias": 0.7547706271041127, "status": "nbUiased", "synonyms": []}]}#Testing default result

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


    def modelSetting(self): #initialised the model & change the model
        #type = 0 online pretrained model, type = 1 online training corpus, type = 2 Url pretrained model
        self.__modelFactory.generateModel()

#----------------------------------------

#Algorithm related functions
    def algorithm_init(self): #initialise the algorithm structure
        self.__algo = biasAlgorithm(self.__modelFactory.getModel(),1)

    #Bias pair related functions
    def setBiasPair(self,address): #change bias pair by given it bias csv location
        self.__biasPairAddress =address
        self.__algo.changeBiasPair(self.__biasPairAddress)

    def addBiasPair(self,biasPair):#add bias pair in current storage, but not change the csv file
        self.__algo.add_pair(biasPair)
    #------------------------------

#----------------------------------------

#OCR function
    def readimage(self,address):# read character from image
        self.ocr = OCR()
        return self.ocr.readimage(address)
#----------------------------------------

#Running functions
    def initialise(self):
        self.modelSetting()
        self.algorithm_init()

    def processSentence(self,sentence):
        result = self.__algo.detect(sentence)
        self.__result = result
        return result

    def run_example1(self):
        cc = maincontroller()#create instance
        cc.setType(2)#use url local model
        cc.initialise()#init model and algo
        sentence = cc.readimage("cvexample2.pdf") #read input from OCR
        print(cc.processSentence(sentence))
    def run_example2(self):
        cc = maincontroller()#create instance
        cc.setType(2)#use url local model
        cc.initialise()#init model and algo
        sentence = "girl is an actress" #read input from OCR
        print(cc.processSentence(sentence))
#----------------------------------------


#UI FUNCTION PART
    def getResult(self):
        return self.__result
    def displayContent(self):
        displayText = ""
        for tokens in self.__result["results"]:
            displayText += " " + tokens["original"]
        return displayText

    def changeContent(self,index,content):
        self.__result["results"][index] = content
#----------------------------------------

if __name__ == "__main__":
    rr = maincontroller()
    #result = {"results": [{"original": "ui", "token": "cv", "bias": 0.7547706271041127, "status": "nbUiased", "synonyms": []}, {"original": "Example", "token": "example", "bias": 0.7789102101165424, "status": "Unbiased", "synonyms": []}, {"original": "Name", "token": "name", "bias": 1.1488525707912602, "status": "Intermediatly Biased", "synonyms": ["constitute", "list", "publicfigure", "discover", "bringup", "figure", "nominate", "mention", "gens", "key", "diagnose", "refer", "keyout", "describe", "advert", "cite", "call", "make", "epithet", "distinguish", "identify"]}, {"original": ":", "token": ":", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "Mary", "token": "mary", "bias": -0.5491991253228343, "status": "Unbiased", "synonyms": []}, {"original": "Anna", "token": "anna", "bias": -0.3756288108162329, "status": "Unbiased", "synonyms": []}, {"original": "Age", "token": "age", "bias": 0.6538975266016501, "status": "Unbiased", "synonyms": []}, {"original": ":", "token": ":", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "18", "token": "18", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "Marriage", "token": "marriage", "bias": -0.10040416913087061, "status": "Unbiased", "synonyms": []}, {"original": "Applying", "token": "applying", "bias": 0.6864817968819494, "status": "Unbiased", "synonyms": []}, {"original": "Occupation", "token": "occupation", "bias": 0.4971676535998074, "status": "Unbiased", "synonyms": []}, {"original": ":", "token": ":", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "Actress", "token": "actress", "bias": -2.43370447343144, "status": "Highly Biased", "synonyms": []}, {"original": "Introduction", "token": "introduction", "bias": 1.101350136502704, "status": "Intermediatly Biased", "synonyms": ["creation", "founding", "origination", "institution", "unveiling", "debut", "initiation", "presentation", "foundation", "innovation", "entry", "insertion", "firstappearance", "instauration", "launching", "intromission", "intro"]}, {"original": ":", "token": ":", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "|", "token": "|", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "am", "token": "am", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "a", "token": "a", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "Mom", "token": "mom", "bias": -0.952158819707209, "status": "Unbiased", "synonyms": []}, {"original": "of", "token": "of", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "two", "token": "two", "bias": 1.028330027072207, "status": "Lowly Biased", "synonyms": []}, {"original": "little", "token": "little", "bias": 0.7420503590182599, "status": "Unbiased", "synonyms": []}, {"original": "boys", "token": "boys", "bias": 0.7504638106504772, "status": "Unbiased", "synonyms": []}, {"original": ".", "token": ".", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "in", "token": "in", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "the", "token": "the", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "family", "token": "family", "bias": 0.702630872352923, "status": "Unbiased", "synonyms": []}, {"original": ",", "token": ",", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "|", "token": "|", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "always", "token": "always", "bias": 1.1227039556509837, "status": "Intermediatly Biased", "synonyms": ["invariably", "constantly", "incessantly", "perpetually", "ever", "eer", "forever"]}, {"original": "play", "token": "play", "bias": 1.200350541215196, "status": "Intermediatly Biased", "synonyms": ["bid", "sport", "gambling", "run", "drama", "takeon", "trifle", "romp", "manoeuvre", "looseness", "toy", "makefor", "bet", "periodofplay", "caper", "actas", "fiddle", "act", "dramaticplay", "childsplay", "flirt", "roleplay", "frolic", "playact", "work", "playingperiod", "encounter", "gaming", "diddle", "dally", "wreak", "recreate", "turn", "fun", "gambol", "freerein", "maneuver", "represent", "swordplay", "spiel", "meet", "bring", "shimmer"]}, {"original": "the", "token": "the", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "role", "token": "role", "bias": 0.7194957193213554, "status": "Unbiased", "synonyms": []}, {"original": "of", "token": "of", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "an", "token": "an", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "understanding", "token": "understanding", "bias": 1.319735170651122, "status": "Intermediatly Biased", "synonyms": ["understand", "reason", "sympathise", "translate", "empathise", "sympathy", "intellect", "apprehension", "read", "interpret", "realize", "realise", "infer", "see", "savvy", "agreement", "empathize", "sympathize", "discernment"]}, {"original": "housewife", "token": "housewife", "bias": -2.3551967214686087, "status": "Highly Biased", "synonyms": ["ladyofthehouse", "womanofthehouse"]}, {"original": ".", "token": ".", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "For", "token": "for", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "the", "token": "the", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "rest", "token": "rest", "bias": 1.1914360296929174, "status": "Intermediatly Biased", "synonyms": ["respite", "balance", "remainder", "relief", "roost", "relaxation", "restperiod", "quietus", "perch", "residual", "sleep", "pillow", "residuum", "catchonesbreath", "eternalrest", "residue", "takeabreather", "reside", "lie", "remain", "eternalsleep", "repose", "breathe", "ease", "stay"]}, {"original": "of", "token": "of", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "my", "token": "my", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "daily", "token": "daily", "bias": 0.8230065044147484, "status": "Unbiased", "synonyms": []}, {"original": "life", "token": "life", "bias": 0.6139683412142071, "status": "Unbiased", "synonyms": []}, {"original": ",", "token": ",", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "|", "token": "|", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "have", "token": "have", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "a", "token": "a", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "dream", "token": "dream", "bias": 0.8897040972606721, "status": "Unbiased", "synonyms": []}, {"original": "to", "token": "to", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "become", "token": "become", "bias": 0.8460786030920059, "status": "Unbiased", "synonyms": []}, {"original": "a", "token": "a", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "performer", "token": "performer", "bias": 0.22261677976210428, "status": "Unbiased", "synonyms": []}, {"original": "on", "token": "on", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "the", "token": "the", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "Drama", "token": "drama", "bias": 0.3321160211627575, "status": "Unbiased", "synonyms": []}, {"original": "stage", "token": "stage", "bias": 0.659926134017651, "status": "Unbiased", "synonyms": []}, {"original": ".", "token": ".", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "|", "token": "|", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "will", "token": "will", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "always", "token": "always", "bias": 1.1227039556509837, "status": "Intermediatly Biased", "synonyms": ["invariably", "constantly", "incessantly", "perpetually", "ever", "eer", "forever"]}, {"original": "play", "token": "play", "bias": 1.200350541215196, "status": "Intermediatly Biased", "synonyms": ["bid", "sport", "gambling", "run", "drama", "takeon", "trifle", "romp", "manoeuvre", "looseness", "toy", "makefor", "bet", "periodofplay", "caper", "actas", "fiddle", "act", "dramaticplay", "childsplay", "flirt", "roleplay", "frolic", "playact", "work", "playingperiod", "encounter", "gaming", "diddle", "dally", "wreak", "recreate", "turn", "fun", "gambol", "freerein", "maneuver", "represent", "swordplay", "spiel", "meet", "bring", "shimmer"]}, {"original": "Drama", "token": "drama", "bias": 0.3321160211627575, "status": "Unbiased", "synonyms": []}, {"original": "together", "token": "together", "bias": 0.8632464311473792, "status": "Unbiased", "synonyms": []}, {"original": "with", "token": "with", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "my", "token": "my", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "little", "token": "little", "bias": 0.7420503590182599, "status": "Unbiased", "synonyms": []}, {"original": "boys", "token": "boys", "bias": 0.7504638106504772, "status": "Unbiased", "synonyms": []}, {"original": ".", "token": ".", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "Fortunately", "token": "fortunately", "bias": 1.0559114672955492, "status": "Intermediatly Biased", "synonyms": ["luckily", "asluckwouldhaveit", "fortuitously"]}, {"original": ",", "token": ",", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "my", "token": "my", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "husband", "token": "husband", "bias": -0.13359004401164404, "status": "Unbiased", "synonyms": []}, {"original": "Mr", "token": "mr", "bias": 1.7113191716318583, "status": "Highly Biased", "synonyms": ["r", "ister"]}, {"original": ".", "token": ".", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "John", "token": "john", "bias": 0.9219987873277675, "status": "Unbiased", "synonyms": []}, {"original": "is", "token": "is", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "a", "token": "a", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "big", "token": "big", "bias": 1.2200591360105655, "status": "Intermediatly Biased", "synonyms": ["vauntingly", "vainglorious", "magnanimous", "freehanded", "swelled", "crowing", "prominent", "fullygrown", "gravid", "large", "giving", "bountiful", "openhanded", "bad", "bragging", "selfaggrandizing", "fullgrown", "grown", "heavy", "expectant", "bounteous", "liberal", "bighearted", "selfaggrandising", "cockahoop", "adult", "boastfully", "grownup", "enceinte", "withchild", "handsome", "braggy", "great"]}, {"original": "supporter", "token": "supporter", "bias": 1.1787007733860968, "status": "Intermediatly Biased", "synonyms": ["helper", "protagonist", "suspensor", "sponsor", "athleticsupporter", "friend", "admirer", "patron", "assistant", "help", "jock", "champion", "garter", "booster"]}, {"original": "of", "token": "of", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "my", "token": "my", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "dream", "token": "dream", "bias": 0.8897040972606721, "status": "Unbiased", "synonyms": []}, {"original": ".", "token": ".", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "Through", "token": "through", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "the", "token": "the", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "support", "token": "support", "bias": 1.0319006578272183, "status": "Lowly Biased", "synonyms": []}, {"original": "of", "token": "of", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "my", "token": "my", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "family", "token": "family", "bias": 0.702630872352923, "status": "Unbiased", "synonyms": []}, {"original": ",", "token": ",", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "|", "token": "|", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "came", "token": "came", "bias": 0.9630051709667597, "status": "Unbiased", "synonyms": []}, {"original": "here", "token": "here", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "For", "token": "for", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "my", "token": "my", "bias": 0, "status": "Unbiased", "synonyms": []}, {"original": "dream", "token": "dream", "bias": 0.8897040972606721, "status": "Unbiased", "synonyms": []}, {"original": ".", "token": ".", "bias": 0, "status": "Unbiased", "synonyms": []}]}
    print(rr.run_example2())
