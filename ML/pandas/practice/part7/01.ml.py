# -*- coding: utf-8 -*-
"""
Created on Fri Feb 12 22:50:28 2021

@author: 김도형
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('./auto-mpg.csv', header=None)

df.columns = ['mpg','cylinders','displacement','horsepower',
              'weight','acc','model year','origin','name']

df['horsepower'].replace("?",np.nan,inplace=True)

df.dropna(subset=['horsepower'],axis=0,inplace=True)
df['horsepower'] = df['horsepower'].astype('float')

ndf = df[['mpg','cylinders','horsepower','weight']]

ndf.plot(kind='scatter',x='weight',y='mpg')
sns.regplot(x='weight',y='mpg',data=ndf)
sns.jointplot(x='weight',y='mpg',kind='reg',data=ndf)

grid_ndf = sns.pairplot(ndf)

X = ndf[['weight']]
y = ndf['mpg']

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3,random_state=10)


from sklearn.linear_model import LinearRegression

lr = LinearRegression()
lr.fit(X_train, y_train)

r_square = lr.score(X_test, y_test)

print(r_square)
print(lr.coef_)
print(lr.intercept_)

y_hat= lr.predict(X)

plt.plot(figuresize=(10,5))
ax1 = sns.displot(y, label='y')
ax2 = sns.displot(y_hat, label = 'y_hat', ax=ax1)

plt.show()
plt.close()