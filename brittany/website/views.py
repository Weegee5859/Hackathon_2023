#store standard routes for wesbites
#where users can go to (navigation)

from flask import Blueprint #URLs defined

views = Blueprint('views', __name__) #define blueprint

@views.route('/') #main page 
def home():
    return "<h1>Test</h1>"