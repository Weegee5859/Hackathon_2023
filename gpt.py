import openai
import os

openai.api_key = "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"


def gpt(input):
    messages = [{"role": "system", "content": ""}]

    while True:
        message = input
        if message:
            messages.append(
                {"role": "user", "content": message},
            )
            chat = openai.ChatCompletion.create(
                model="ft:gpt-3.5-turbo-0613:personal::87PDCxlf",
                messages=messages
            )
        reply = chat.choices[0].message.content
        print(f"ChatGPT: {reply}")
        return reply