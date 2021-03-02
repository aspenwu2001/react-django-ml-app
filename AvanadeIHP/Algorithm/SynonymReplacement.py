import random
import controller
import nltk
from nltk.corpus import wordnet

def get_synonyms(word):
    synonyms = set()
    #wordnet
    nltk.download('punkt')
    synList = wordnet.synsets(word)
    print(synList)
    for syn in wordnet.synsets(word):
        for l in syn.lemmas():
            synonym = l.name().replace("_", " ").replace("-", " ").lower()
            synonym = "".join([char for char in synonym if char in ' qwertyuiopasdfghjklzxcvbnm'])
            synonyms.add(synonym)

    if word in synonyms:
        synonyms.remove(word)

    return list(synonyms)


def synonymBiasCheck(wordList):
    text = ""
    for x in wordList:
        text += x + " "
    check = controller.processingSentence(text,2)
    return check
def synonym_replacement(words, n):

    words = words.split()
    stop_words = ["is","a"]
    new_words = words.copy()
    random_word_list = list(set([word for word in words if word not in stop_words]))
    random.shuffle(random_word_list)
    num_replaced = 0

    for random_word in random_word_list:
        synonyms = get_synonyms(random_word)

        if len(synonyms) >= 1:
            synonym = random.choice(list(synonyms))
            new_words = [synonym if word == random_word else word for word in new_words]
            num_replaced += 1

        if num_replaced >= n: #only replace up to n words
            break

    sentence = ' '.join(new_words)

    return sentence

if __name__ == "__main__":
    print(get_synonyms("girl"))
    print(synonymBiasCheck(get_synonyms("girl")["bias"]))
    print(synonym_replacement("girl is a actor",6))
