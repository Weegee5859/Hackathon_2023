from website import create_app #used from __init__.py
from flask import Flask, jsonify, render_template, request
app = create_app()

if __name__ == '__main__': #only if run file
    #run flask application to start up web server
    app.run(port=12000, debug=True) #changes in code with rerun webserver
    #False for production