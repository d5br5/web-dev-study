# -*- coding: utf-8 -*-
"""
Created on Thu Feb 11 15:11:04 2021

@author: 김도형
"""

import seaborn as sns
import pandas as pd

titanic = sns.load_dataset('titanic')
df = titanic.loc[:,['age', 'fare']]
df['ten']=10

def add_10(n):
    return n+10

def add_two(a,b):
    return a+b

sr1 = df['age'].apply(add_10)

sr2 = df['age'].apply(add_two, b=10)

sr3 = df['age'].apply(lambda x:add_10(x))

df1 = df.apply(add_10)
df2 = df.applymap(add_10)       # 차이가 뭐지..?

print(df1)
print('----')
print(df2)

def missing_value(series):
    return series.isnull()

res = df.apply(missing_value, axis=0)

print(res)

def min_max(x):
    return x.min()-x.max()


res = df.apply(min_max)

print(res)

df['add'] = df.apply(lambda x:add_two(x['age'],x['ten']),axis=1)

print(df['add'])

ress=df.pipe(missing_value)

print(ress)
    