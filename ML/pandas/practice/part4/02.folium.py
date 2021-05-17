# -*- coding: utf-8 -*-
"""
Created on Tue Feb  9 20:55:07 2021

@author: 김도형
"""

import pandas as pd
import folium

df = pd.read_excel('./sample/seoul_univ.xlsx')
seoul_map = folium.Map(location=[37.55,126.98], zoom_start=12, tiles='Stamen Terrain')

for name, lat, lng in zip(df.index, df.위도, df.경도):
    folium.Marker([lat, lng], popup=name).add_to(seoul_map)


seoul_map.save('./seoul_colleges.html')
