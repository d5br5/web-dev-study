# -*- coding: utf-8 -*-
"""
Created on Sun Feb 14 23:37:59 2021

@author: 김도형
"""

import pandas as pd
import seaborn as sns
import folium

file_path = './2016_middle_school_graduates_report.xlsx'
df = pd.read_excel(file_path, header=0)

mschool_map = folium.Map(location=[37.55,126.98], tiles='Stamen Terrain', zoom_start=12)

from sklearn import preprocessing

label_encoder = preprocessing.LabelEncoder()
onehot_encoder = preprocessing.OneHotEncoder()

onehot_location = label_encoder.fit_transform(df['지역'])
onehot_code = label_encoder.fit_transform(df['코드'])
onehot_type = label_encoder.fit_transform(df['유형'])
onehot_day = label_encoder.fit_transform(df['주야'])

df['location'] = onehot_location
df['code'] = onehot_code
df['type'] = onehot_type
df['day'] = onehot_day

from sklearn import cluster
columns_list = [9,10,13]

X=df.iloc[:,columns_list]

X=preprocessing.StandardScaler().fit(X).transform(X)

dbm = cluster.DBSCAN(eps =0.2, min_samples=5)

dbm.fit(X)

cluster_label = dbm.labels_
df['Cluster'] = cluster_label
