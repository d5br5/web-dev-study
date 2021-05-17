# -*- coding: utf-8 -*-
"""
Created on Fri Feb  5 12:56:44 2021

@author: 김도형
"""

import pandas as pd


list_data = ['123456', 123, True,'happy'] 

sr = pd.Series(list_data, index=['gd','gd','sdf','dd'])
print(sr)
print(sr[2])

print(sr.index)     # RangeIndex(start=0, stop=4, step=1)
print(sr.values)    # ['123456' 123 True 'happy']

print('=====================')

dic_data = {'a':1, 'b':2, 'c':3, 'ds':44}

sr = pd.Series(dic_data)

print(sr['a'])  # 1
print(sr[0])    # 1

print(sr.index)     # Index(['a', 'b', 'c', 'ds'], dtype='object')
print(sr.values)    # [1 2 3 44]

a1 = sr[['a','b','ds']]
print(a1)

print('=====================')

tup_data = ('dohyung',True, 300)
sr = pd.Series(tup_data, index=['이름','참거짓','나이'])

print(sr)
print(sr[1:2]) # 끝범위 포함 안됨
print(sr['이름':'나이']) # 끝범위 포함

print('=====================')

