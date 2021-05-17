# -*- coding: utf-8 -*-
"""
Created on Thu Feb 11 19:51:36 2021

@author: 김도형
"""

import seaborn as sns
import pandas as pd

titanic = sns.load_dataset('titanic')

mask1 = (titanic.age>=10) & (titanic.age<20)

df_teen = titanic.loc[mask1,:]
print(df_teen)

mask2 = (titanic.age<10) & (titanic.sex =='female')
df_female_under10 = titanic.loc[mask2,:]

print(df_female_under10)

mask3 = (titanic.age<10) | (titanic.age>=60)
df_pro = titanic.loc[mask3,['age','sex','alone']]

print(df_pro)

isin_filter = titanic['sibsp'].isin([3,4,5])

df_isin = titanic[isin_filter]

print(df_isin)