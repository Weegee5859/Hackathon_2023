from flask import Flask

def create_app():
    app = Flask(__name__) #initialize flask
    app.config['SECRET_KEY'] = '000' # encrypt/secure cookies
    
    #lists different views & URLS
    from .views import views
    from .auth import auth

    #no prefix for accessing route
    app.register_blueprint(views, url_prefix = '/')
    app.register_blueprint(auth, url_prefix = '/')
    
    return app 
#waitress-serve --host 127.0.0.1 hello:app
