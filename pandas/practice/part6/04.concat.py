# -*- coding: utf-8 -*-
"""
Created on Thu Feb 11 20:44:46 2021

@author: 김도형
"""

import pandas as pd

pd.set_option('display.max_columns',80)
pd.set_option('display.max_colwidth',100)

df1 = pd.read_excel('./stock price.xlsx')
df2 = pd.read_excel('./stock valuation.xlsx')

res1 = pd.concat([df1,df2], axis=1) # 0이면 위아래, 1이면 좌우로 연결
res2 = pd.concat([df1,df2], ignore_index=True)  # 행 인덱스 초기화 후 정수배열
res3 = pd.concat([df1,df2], axis=0, join='inner') # outer : 합집합

merge_outer = pd.merge(df1, df2, how='outer',on='id') 

print(merge_outer)

merge_left = pd.merge(df1, df2, how='left',left_on='stock_name', right_on='name')

print(merge_left)

price = df1[df1['price']<50000]

print(price)

value = pd.merge(price,df2, how='inner')

print(value)