# -*- coding: utf-8 -*-
"""
Created on Fri Feb  5 21:07:59 2021

@author: 김도형
"""

import pandas as pd

exam_data = {'math':[100,80,90], 'eng':[50,60,80], 'sci':[90,80,90]}

df = pd.DataFrame(exam_data, index=['me','you','he'])

print(df)
print('-------------------')

print(df.loc[['me']])
print(df.loc[['me','you']][['math','sci']])

print('-------------------')
print(df[['math']])     #단일 괄호시 시리즈, 이중 괄호시 데이터프레임으로 출력
print(df['math'].iloc[[0,1]])
print(df[['math']].loc['you'])

print('-------------------')
print(df.loc['you','sci'])          #원소 출력
print('-------------------')
print(df.loc['you',['sci','math']]) #시리즈 출력
print('-------------------')
print(df.loc[['you','me'],'sci'])   #시리즈 출력
print('-------------------')
print(df.loc[['you','me'],['math','sci']])  #데이터프레임 출력
print('-------------------')

print(df.loc[:,['math','sci']])  #데이터프레임 출력

df['lang'] = 80

print(df)

df.loc['happy'] = 90
print(df)

df.iloc[1][1] = 90
df.loc['you']['sci'] = 80
print(df)

df.loc['happy',['eng','sci']] = 50,40
print(df)

print(df.transpose())  #이걸로 쭉 변하지는 않음
print(df.T)             #둘이 같음
print(df)
print('-0---------------')