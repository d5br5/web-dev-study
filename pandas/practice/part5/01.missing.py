# -*- coding: utf-8 -*-
"""
Created on Wed Feb 10 20:19:11 2021

@author: 김도형
"""

import seaborn as sns

df = sns.load_dataset('titanic')

print(df)

print(df.info())

print('----')
print(df['deck'].value_counts(dropna=False))

print(df.head().isnull())
print(df.head().notnull())

print(df.head().isnull().sum(axis=0))   # 0이면 열 기준 합, 1이면 행 기준 합

missing_df = df.isnull()

print(missing_df)
for col in missing_df.columns:
    missing_count = missing_df[col].value_counts()      #false, true를 index로 하는 시리즈
    try :
        print(col, ":", missing_count[True])
    except:
        print(col, ":", 0)
    
df_thresh = df.dropna(axis=1, thresh=500)   #NaN 데이터가 500개 넘는 열 삭제

df_age = df.dropna(axis=0, subset=['age'], how='any')


mean_age = df['age'].mean(axis=0)
most_freq = df['age'].value_counts(dropna=True).idxmax()

df['age'].fillna(mean_age, inplace=True)
df['age'].fillna(method='ffill', inplace=True)

