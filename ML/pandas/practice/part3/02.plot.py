# -*- coding: utf-8 -*-
"""
Created on Mon Feb  8 23:35:27 2021

@author: 김도형
"""

import pandas as pd

df = pd.read_excel('./power.xlsx')

print(df)

df_ns = df.iloc[[0,5],3:]

df_ns.index=['south','north']
df_ns.columns = df_ns.columns.map(int)

df_ns = df_ns.T

print(df_ns)
df_ns.plot(kind='bar')

