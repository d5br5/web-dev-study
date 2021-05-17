# -*- coding: utf-8 -*-
"""
Created on Sun Feb  7 19:53:37 2021

@author: 김도형
"""

import pandas as pd
import numpy as np
import seaborn as sns

stu1 = pd.Series({"korean":np.nan, "english":100, "math":70})
stu2 = pd.Series({"math":60, "korean":80})

add = stu1 + stu2
sub = stu1 - stu2  # == sub = stu1.sub(stu2, fill_value=0)
mul = stu1 * stu2
div = stu1 / stu2  # 0으로 나누면 inf 됨

result = pd.DataFrame([add, sub, mul, div], index=['add','sub','mul','div'])

print(result)

titanic = sns.load_dataset('titanic')
df = titanic.loc[:,['age','fare']]

print(df.head())
dft = df.tail()
df = df.head()

print(df)
print(dft)

dft.index=[0,1,2,3,4]

print(df-dft)


