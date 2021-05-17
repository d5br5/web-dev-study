# -*- coding: utf-8 -*-
"""
Created on Sun Feb 14 23:29:50 2021

@author: 김도형
"""

import pandas as pd
import matplotlib.pyplot as plt

uci_path = 'https://archive.ics.uci.edu/ml/machine-learning-databases/\
00292/Wholesale%20customers%20data.csv'
df = pd.read_csv(uci_path, header=0)

X = df.iloc[:,:]

from sklearn import preprocessing
X = preprocessing.StandardScaler().fit(X).transform(X)

from sklearn import cluster
kmeans = cluster.KMeans(init='k-means++', n_clusters=5, n_init=10)
kmeans.fit(X)

cluster_label=kmeans.labels_

df['Cluster'] = cluster_label

print(df)