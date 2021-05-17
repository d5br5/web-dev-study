# -*- coding: utf-8 -*-
"""
Created on Mon Feb  8 21:52:38 2021

@author: 김도형
"""

import pandas as pd

data = {'name':['jerry', 'riah', 'paul'],
        'algol':["A","A+","B"],
        'basic':['C',"B","B+"]}

df = pd.DataFrame(data)
df = df.set_index('name')
print(df)

df.to_csv("./df_sample.csv")
df.to_json("./df_sample.json")
df.to_excel("./df_sample.xlsx")



