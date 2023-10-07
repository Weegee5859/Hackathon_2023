import os
import openai

openai.api_key = "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"
# my API KEY I spent 10 bucks on credits sigh
openai.File.create(file=open("training_data.json", "r"), purpose='fine-tune')

model_engine = "gpt-3.5-turbo"
batch_size = 5  # How many times GPT runs through our data set
n_epochs = 1  # How many times GPT changes based on each data set
learning_rate = 0.01  # Honestly no idea but just how fast it learns
max_tokens = 2048  # How many characters we can pass into GPT

training_file = "training_data.json"

fine_tuning_job = openai.FineTuningJob.create(
    model_engine=model_engine,
    n_epochs=n_epochs,
    batch_size=batch_size,
    learning_rate=learning_rate,
    training_file=os.path.abspath(training_file),
)

job_id = fine_tuning_job["id"]
print(f"Fine-tuning job created with ID: {job_id}")
