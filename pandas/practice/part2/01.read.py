# -*- coding: utf-8 -*-
"""
Created on Mon Feb  8 19:23:48 2021

@author: 김도형
"""

import pandas as pd
from bs4 import BeautifulSoup
import requests
import re
import googlemaps

file_path = './sample/read_csv_sample.csv'

f1 = pd.read_csv(file_path)

print(f1)

f2 = pd.read_csv(file_path, header=None)

print(f2)

f3 = pd.read_csv(file_path, header=0) # 몇 번째 행을 header로 사용할 것인가, none이면 0base

print(f3)

# option 
# names, index_col, header, names, skiprows, skip_footer, encoding


file_path = './sample/read_excel_sample.xlsx'

d1 = pd.read_excel(file_path)
d2 = pd.read_excel(file_path, header=None)

print(d1)
print(d2)


file_path = './sample/read_json_sample.json'

d3 = pd.read_json(file_path)

print(d3)


web_path = './sample/sample.html'

tables = pd.read_html(web_path)

print(tables[0])
print(len(tables))

for i in range(len(tables)):
    print(tables[i])
    print('\n')
    

url = "https://en.wikipedia.org/wiki/List_of_American_exchange-traded_funds"

resp = requests.get(url)
soup = BeautifulSoup(resp.text,'lxml')
rows = soup.select('div > ul > li')

etfs ={}
for row in rows:
    try:
        etf_name = re.findall('^(.*) \(NYSE', row.text)
        etf_market = re.findall('\((.*)\|', row.text)
        etf_ticker = re.findall('NYSE Arca\|(.*)\)', row.text)
        
        if(len(etf_ticker)>0) & (len(etf_market)>0) & (len(etf_name)>0):
            etfs[etf_ticker[0]] = [etf_market[0], etf_name[0]]
    except AttributeError as err:
        pass

df = pd.DataFrame(etfs)


