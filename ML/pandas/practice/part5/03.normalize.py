# -*- coding: utf-8 -*-
"""
Created on Wed Feb 10 21:59:51 2021

@author: 김도형
"""

import pandas as pd
import numpy as np

df = pd.read_csv('./auto-mpg.csv', header=None)

df.columns = ['mpg', 'cylinders','displacement','horsepower','weight','accel','model year','origin','name']

print(df)

mpg_to_kpl = 1.60934/3.78541

df['kpl'] = df['mpg']*mpg_to_kpl

df['kpl'] = df['kpl'].round(2)


df['horsepower'].replace('?',np.nan,inplace=True)
df.dropna(subset=['horsepower'], axis=0, inplace=True)
df['horsepower'] = df['horsepower'].astype('float')

print(df['horsepower'])

df['origin'].replace({1:'USA', 2:'EU', 3:'JPN'}, inplace=True)
df['origin'] = df['origin'].astype('category')
df['origin'] = df['origin'].astype('str')

df['model year'] = df['model year'].astype('category')

count, bin_dividers = np.histogram(df['horsepower'], bins=3)

print(bin_dividers)

bin_names = ['저출력', '보통출력', '고출력']

df['hp_bin'] = pd.cut(x=df['horsepower'],
                      bins=bin_dividers,
                      labels=bin_names,
                      include_lowest=True)

print(df)

horsepower_dummies = pd.get_dummies(df['hp_bin'])

print(horsepower_dummies)

from sklearn import preprocessing

# 전처리를 위한 encoder 객체 생성
label_encoder = preprocessing.LabelEncoder()
onehot_encoder = preprocessing.OneHotEncoder()

# label encoder로 문자열 범주를 숫자형 범주로 변환
onehot_labeled = label_encoder.fit_transform(df['hp_bin'].head(15))
print(onehot_labeled)

# 2차원 행렬로 변경
onehot_reshaped = onehot_labeled.reshape(len(onehot_labeled), 1)
print(onehot_reshaped)

# 희소행렬로 변환
onehot_fitted = onehot_encoder.fit_transform(onehot_reshaped)
print(onehot_fitted)

df.horsepower = df.horsepower/abs(df.horsepower.max())
min_x = df.horsepower - df.horsepower.min()
min_max = df.horsepower.max()-df.horsepower.min()
df.horsepower = min_x/min_max
