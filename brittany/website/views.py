#store standard routes for wesbites
#where users can go to (navigation)

from flask import Blueprint, render_template #URLs defined


views = Blueprint('views', __name__) #define blueprint

@views.route('/') #main page 
def home():
    return render_template('home.html')