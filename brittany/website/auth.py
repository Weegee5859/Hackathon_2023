#authentication
from flask import Blueprint, render_template #URLs defined

auth = Blueprint('auth', __name__) #define blueprint

@auth.route('/login') #can change button directory
def login():
    return render_template("login.html", text = "Testing", user = "Tim")

@auth.route('/logout')
def logout():
    return "<p>Logout</p>"

@auth.route('/sign-up')
def sign_up():
    return "<p>Sign Up</p>"