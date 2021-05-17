# -*- coding: utf-8 -*-
"""
Created on Mon Feb  8 22:12:08 2021

@author: 김도형
"""

import pandas as pd


file_path = './auto-mpg.csv'
df = pd.read_csv(file_path, header=None)

print(df.shape)         # (398,9)
print(df.info())        # 각 열의 데이터 개수와 데이터 타입

print(df.dtypes)        # 각 열의 데이터 타입
print(df[1].dtypes)

print(df.describe())    # 통계량 (평균, 표준편차, 최대값, 최소값, 중간값 등)
print(df.describe(include='all')) 

print(df.count())       # df의 각 열이 갖는 원소 개수
print(df[2].value_counts(dropna=False)) # 열의 고유값 개수