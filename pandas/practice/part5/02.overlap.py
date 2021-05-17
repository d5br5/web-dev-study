# -*- coding: utf-8 -*-
"""
Created on Wed Feb 10 21:20:56 2021

@author: 김도형
"""

import pandas as pd

df = pd.DataFrame({'c1':['a','a','b','a','b'],
                   'c2':[1,1,1,2,2],
                   'c3':[1,1,2,2,2]})

print(df)

df_dup = df.duplicated()

df=df.drop_duplicates(subset=['c2','c3'])

print(df)