# -*- coding: utf-8 -*-
"""
Created on Tue Feb  9 21:12:58 2021

@author: 김도형
"""

import pandas as pd
import folium
import json

file_path='./sample/gyonggi.xlsx'
df = pd.read_excel(file_path, index_col='구분')
df.columns = df.columns.map(str)

geo_path='./sample/boundary.json'
try:
    geo_data = json.load(open(geo_path, encoding='utf-8'))
except:
    geo_data = json.load(open(geo_path, encoding='uth-8-sig'))
    
g_map = folium.Map(location=[37.5502,126.982],
                   tiles='Stamen Terrain', zoom_start=9)

year = '2007'

folium.Choropleth(geo_data=geo_data,
                  data=df[year],
                  columns = [df.index, df[year]],
                  fill_color='YlOrRd', fill_opacity=0.7, line_opacity=0.3,
                  threshold_scale = [10000,100000,300000, 500000,700000],
                  key_on='feature.properties.name').add_to(g_map)

g_map.save('./gyonggi_population_'+year+'.html')        