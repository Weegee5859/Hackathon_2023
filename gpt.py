import openai
import random
import os

openai.api_key = "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"

messages = [{"role": "system", "content":
             "You are a intelligent assistant."}]

while True:
    message = input("User : ")
    if message:

        if ((random.SystemRandom().randint(0, 100) % 2) == 1):
            print("2")
            messages.append(
                {"role": "user", "content": "\" " + message +
                 "\" respond but in a short slightly blunt sentence"},
            )
        else:
            print("1")
            messages.append(
                {"role": "user", "content": "\" " + message +
                 "\" respond but in a short short humorous sentence"},
            )
        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages

        )
    reply = chat.choices[0].message.content
    print(f"ChatGPT: {reply}")
    messages.append({"role": "assistant", "content": reply})
