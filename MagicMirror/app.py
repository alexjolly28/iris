#This the flask program used for Smart Mirror 2.0

from flask import Flask, render_template, url_for
import requests
import random


app = Flask(__name__)
name="Alex"

@app.route('/')

def hello_world():
    url = ('https://newsapi.org/v2/top-headlines?''country=in&''apiKey=63d4dfa5475e491ca876356c54fd7234')
    r = requests.get(url).json()
    newsCount10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    news1 = ["", "", "", "", "", "", "", "", "", "", "", ""]
    for i in newsCount10:
        news1[i] = r['articles'][i]['title']
    news2 = ["", "", "", "", "", "", "", "", "", "", "", ""]
    i=0
    for i in newsCount10:
        news2[i] = r['articles'][i]['title']
    return render_template('mirror.html', news1=news1, news2=news2, name=name)
app.debug = True
app.run(host='localhost',port=8000)
