# -*- coding: utf-8 -*-
"""
Created on Wed Feb 10 23:15:20 2021

@author: 김도형
"""

import pandas as pd

df= pd.read_csv('stock-data.csv')

print(df)

df['newdata'] = pd.to_datetime(df['Date'])

df.set_index('newdata',inplace=True)

df.drop('Date', axis=1, inplace=True)

print(df)



