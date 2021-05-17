# -*- coding: utf-8 -*-
"""
Created on Fri Feb  5 20:33:45 2021

@author: 김도형
"""

import pandas as pd

dict_data = {'c0':[1,2,3], 'c1':[4,5,6], 'c2':[7,8,9], 'c3':[10,11,12]}

df = pd.DataFrame(dict_data)

print(df)

print(df['c0'][2])
print(df.loc[2]['c2'])
print('------------------')

print()
print('\n')
print('=====================')
print('\n')

df = pd.DataFrame([['준서', 30, '덕영중'],['혜민',25,'옥정중']], index=['man','woman'])

print(df)

print(df.index)
print(df.columns)

print('\n')
df.columns = ['happy', 'my', 'name']    #통째로 변경, index도 마찬가지

print(df)


print('\n')
print('=====================')
print('\n')


hp = df.rename(columns={'happy':'namse'}, index={'man':'gook'})  #일부 변경된 값 리턴
print(hp)
print('\n')
df.rename(columns={'happy':'namse'}, index={'man':'gook'} , inplace=True)  #내부 변경
print(df)


exam_data = {'math':[100,80,90], 'eng':[50,60,80], 'sci':[90,80,90]}

df = pd.DataFrame(exam_data, index=['me','you','he'])

print(df)

df.drop('you', inplace=True, axis=0) 
#axis=0 or null 이면 행삭제, 1이면 열삭제
#여러개인 경우 'you' 대신 ['you', 'me'] 등의 리스트 사

print(df)