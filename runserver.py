import os
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash

app = Flask(__name__)
app.debug = True

@app.route('/')
def hello():
    return render_template("home.html")
    