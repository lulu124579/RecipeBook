import pandas as pd
import numpy as np
def remove_punctuation(word):
    new_word = ""
    for letter in word:
        if letter.isalpha() or letter==' ':
            new_word += letter
    return new_word
def remove_words(word):
    word = word.replace(' lb ', '')
    word = word.replace(' to','')
    word = word.replace(' Tbsp ','')
    word = word.replace(' tsp ','')
    word = word.replace(' pound ','')
    word = word.replace(' cup ','')
    word = word.replace(' teaspoon ','')
    word = word.replace(' oz ','')
    word = word.replace(' ounces ','')
    word = word.replace(' qt ','')
    word = word.replace('plus more ','')
    word = word.replace('shallow ceramic or glass baking dish','')
    word = word.replace(' about ','')
    word = word.replace(' inch in diameter ','')
    word = word.replace(' teaspoons ','')
    word = word.replace(' tablespoons ','')
    word = word.replace(' cups ','')
    
    

    return word


df = pd.read_csv("recipes.csv")

print(df.columns)

cols = ['Title','Ingredients']
#print(df[cols])
dataTitle = df['Title']
dataTitle = np.array(dataTitle)
dataIngredients = np.array(df['Cleaned_Ingredients'])
for i in range(len(dataIngredients)):
    #print(item)
    print('\n')
    r = remove_punctuation(dataIngredients[i])
    result = remove_words(r)
    print("Recipe": dataTitle[i])
    print(result)
    print('\n')
#print(data)

'''

'''
