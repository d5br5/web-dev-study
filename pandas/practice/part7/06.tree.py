# -*- coding: utf-8 -*-
"""
Created on Sun Feb 14 22:42:20 2021

@author: 김도형
"""

import pandas as pd
import numpy as np

uci_path = 'https://archive.ics.uci.edu/ml/machine-learning-databases/\
breast-cancer-wisconsin/breast-cancer-wisconsin.data'

df = pd.read_csv(uci_path, header=None)

df.columns = ['id','clump','cell_size','cell_shape','adhesion','epithlial',
              'bare_nuclei','chromatin','normal_nucleoli','mitoses','class']

pd.set_option('display.max_columns',15)

df['bare_nuclei'].replace('?',np.nan, inplace=True)
df.dropna(subset=['bare_nuclei'],axis=0,inplace=True)
df['bare_nuclei']=df['bare_nuclei'].astype('int')

y=df['class']
X=df.drop(['class'],axis=1)

from sklearn import preprocessing
from sklearn.model_selection import train_test_split

X = preprocessing.StandardScaler().fit(X).transform(X)
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3, random_state=10)

from sklearn import tree

tree_model = tree.DecisionTreeClassifier(criterion='entropy', max_depth=5)

tree_model.fit(X_train, y_train)

y_hat = tree_model.predict(X_test)

from sklearn import metrics
matrix = metrics.confusion_matrix(y_test, y_hat)
report = metrics.classification_report(y_test, y_hat)

print(report)