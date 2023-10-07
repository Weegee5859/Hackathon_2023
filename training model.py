import os
import openai

openai.api_key = "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"

openai.File.create(file=open("training_data.json", "r"), purpose='fine-tune')
openai.FineTuningJob.create(
    training_file="training_data.json", model="gpt-3.5-turbo")
