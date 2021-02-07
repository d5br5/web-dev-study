# -*- coding: utf-8 -*-
"""
Created on Sun Feb  7 19:00:02 2021

@author: 김도형
"""

import pandas as pd

exam_data = {"name":['seo','woo','ina'],
             "math":[100,90,80],
             "eng":[70,60,50],
             "sci":[40,30,20],
             "p.e.":[40,70,100]}

df = pd.DataFrame(exam_data)

print(df)

df = df.set_index(['name'])

print(df)

print(df.loc[['seo']])

df = df.reset_index()

print(df)

df.sort_index()

print(df)

df.index = ['hi','name','gook']

print(df)

df = df.sort_index()

print(df)

ndf = df.sort_values(by='p.e.', ascending=False)

print(ndf)

