# -*- coding: utf-8 -*-
"""
Created on Tue Feb  9 12:49:38 2021

@author: 김도형
"""

import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import font_manager, rc
font_path="./sample/malgun.ttf"
font_name = font_manager.FontProperties(fname=font_path).get_name()
rc('font',family=font_name)

df = pd.read_excel('./sample/시도별 전출입 인구수.xlsx', header=0)

df = df.fillna(method='ffill')

print(df)

mask = (df['전출지별']=='서울특별시') & (df['전입지별']!='서울특별시')

print(mask)
df_seoul = df[mask]

print(df_seoul)

df_seoul = df_seoul.drop(['전출지별'],axis=1)
df_seoul.rename({'전입지별':'전입지'},axis=1,inplace=True)
df_seoul.set_index('전입지', inplace=True)

print(df_seoul)

sr_one = df_seoul.loc['경기도']

plt.style.use('ggplot')
print(plt.style.available)

plt.figure(figsize=(14,5))
plt.xticks(size = 10, rotation='vertical')

plt.plot(sr_one.index, sr_one.values, marker='o', markersize=10, linewidth=2)    # == plt.plot(sr_one)

plt.title('서울->경기 인구 이동')
plt.xlabel('기간')
plt.ylabel('인구 이동수')
plt.legend(labels=['서울->경기'], loc='best')

plt.show()
