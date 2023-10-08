from website import create_app #used from __init__.py
from flask import Flask, jsonify, render_template, request
import openai
import os

openai.api_key = "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"

app = create_app()

def gpt(input):
    messages = [{"role": "system", "content": ""}]

    while True:
        message = input
        if message:
            messages.append(
                {"role": "user", "content": message},
            )
            chat = openai.ChatCompletion.create(
                model="ft:gpt-3.5-turbo-0613:personal::87N7eqKL",
                messages=messages
            )
        reply = chat.choices[0].message.content
        print(f"ChatGPT: {reply}")
        messages.append({"role": "assistant", "content": reply})
        return reply
    

@app.route("/gpt_call", methods=['POST', 'GET'])
def gpt_call():
    if request.method == "POST":
        my_data = request.get_json()
        print(my_data[0]["input"])
        gpt_response = gpt(my_data[0]["input"])
        print(gpt_response)
 
    results = {'processed': gpt_response}
    return jsonify(results)

if __name__ == '__main__': #only if run file
    #run flask application to start up web server
    app.run(port=12000, debug=True) 
    #True = changes in code with rerun webserver
    #False = production