# -*- coding: utf-8 -*-
"""
Created on Fri Feb 12 20:05:23 2021

@author: 김도형
"""

import pandas as pd
import seaborn as sns

titanic = sns.load_dataset('titanic')
df = titanic.loc[:,['age','sex','class','fare','survived']]

print('승객 수:', len(df))

grouped = df.groupby(['class','sex'])

print(grouped)

average = grouped.mean()
# mean, max, min, sum, count, size, var, std, describe, info, first, last

print(average)

for key, group in grouped:
    print('key:',key)
    print('number:',len(group))
    print(group)

group3 = grouped.get_group(('Third','male'))
print(group3)

# 그룹에 함수 매핑
def min_max(x):
    return x.max()-x.min()

agg_minmax = grouped.agg(min_max)
print(agg_minmax)

# 열마다 다른 함수 매핑 가능
agg_ss = grouped.agg({'fare':['min','max'], 'age':'mean'})
print(agg_ss)

# 그룹 필터
grouped_filter = grouped.filter(lambda x :len(x)>=200)
grouped_filter = grouped.filter(lambda x :x.age.mean()<30)

print(grouped_filter)

agg_grouped = grouped.apply(lambda x:x.describe())

print(agg_grouped)