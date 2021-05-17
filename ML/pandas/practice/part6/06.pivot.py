# -*- coding: utf-8 -*-
"""
Created on Fri Feb 12 21:00:19 2021

@author: 김도형
"""

import pandas as pd
import seaborn as sns

titanic = sns.load_dataset('titanic')
df = titanic.loc[:,['age','sex','class','fare','survived']]

pdf1 = pd.pivot_table(df, index = ['class','sex'],
                      columns='survived', values=['age','fare'],
                      aggfunc=['mean','max'])

print(pdf1)
print(pdf1.xs(('First','female'), level = [0, 'sex']))
print(pdf1.xs('mean',axis=1))       # 열 인덱스가 mean인 데이터 선택, 0이면 행


