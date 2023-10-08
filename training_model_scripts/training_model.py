import os
import openai
import jsonlines

openai.api_key = "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"
# my API KEY I spent 10 bucks on credits sigh
# openai.File.wait_for_processing(id="training_data.jsonl", max_wait_seconds=60)
training_response = openai.File.create(
    file=open("training_data.jsonl", "rb"), purpose="fine-tune")
training_file_id = training_response["id"]

model_engine = "gpt-3.5-turbo"
batch_size = 5  # How many times GPT runs through our data set
n_epochs = 1  # How many times GPT changes based on each data set
learning_rate = 0.01  # Honestly no idea but just how fast it learns
max_tokens = 2048  # How many characters we can pass into GPT

fine_tuning_job = openai.FineTuningJob.create(
    model=model_engine,
    # n_epochs=n_epochs,
    # batch_size=batch_size,
    # learning_rate=learning_rate,
    training_file=training_file_id,
    # max_tokens = max_tokens
)

print(fine_tuning_job)
