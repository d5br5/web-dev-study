# -*- coding: utf-8 -*-
"""
Created on Sun Feb 14 21:42:21 2021

@author: 김도형
"""

import pandas as pd
import seaborn as sns

df = sns.load_dataset('titanic')
pd.set_option('display.max_columns',15)

rdf = df.drop(['deck','embark_town'],axis=1)

rdf= rdf.dropna(subset=['age'],how='any',axis=0)
most_freq = rdf['embarked'].value_counts(dropna=True).idxmax()
rdf['embarked'].fillna(most_freq, inplace=True)

ndf = rdf[['survived','pclass','sex','age','sibsp','parch','embarked']]

onehot_sex = pd.get_dummies(ndf['sex'])
onehot_embark = pd.get_dummies(ndf['embarked'])

ndf = pd.concat([ndf,onehot_sex,onehot_embark], axis=1)
ndf.drop(['sex','embarked'], axis=1, inplace=True)

y = ndf['survived']
X = ndf.drop(['survived'], axis=1) #survived 제외 전부

from sklearn import preprocessing
from sklearn.model_selection import train_test_split

X = preprocessing.StandardScaler().fit(X).transform(X)
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3, random_state=10)

from sklearn import svm

svm_model = svm.SVC(kernel = 'rbf')
svm_model.fit(X_train, y_train)

y_hat = svm_model.predict(X_test)

from sklearn import metrics
svm_matrix = metrics.confusion_matrix(y_test, y_hat)
svm_report = metrics.classification_report(y_test, y_hat)

print(svm_report)