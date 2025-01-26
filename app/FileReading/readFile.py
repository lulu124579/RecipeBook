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
df = df.drop('Ingredients',1)
df = df.drop('Instructions',1)
cols = ['Title','Ingredients']
#print(df[cols])
dataTitle = df['Title']
dataTitle = np.array(dataTitle)
dataIngredients = np.array(df['Cleaned_Ingredients'])
for item in dataIngredients:
    #print(item)
    print('\n')
    r = remove_punctuation(item)
    result = remove_words(r)
    print(result)
    print('\n')
#print(data)

'''

'''
