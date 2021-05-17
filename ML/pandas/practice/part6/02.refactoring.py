# -*- coding: utf-8 -*-
"""
Created on Thu Feb 11 15:43:09 2021

@author: 김도형
"""

import seaborn as sns
import pandas as pd

titanic = sns.load_dataset('titanic')

df = titanic.loc[0:4,'survived':'age']

columns = list(df.columns.values)

columns_sorted = sorted(columns)
columns_reverser = list(reversed(columns))
columns_customed = ['pclass','sex','age','survived']

df_sorted = df[columns_sorted]

print(df_sorted)


df = pd.read_excel('./주가데이터.xlsx')

print(df)

df['연월일'] = df['연월일'].astype('str')
dates = df['연월일'].str.split('-')

df['연']=dates.str.get(0)
df['월']=dates.str.get(1)
df['일']=dates.str.get(2)

print(df)