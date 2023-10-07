import os
import openai

openai.api_key = "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"

openai.File.create(file=open("training_data.json", "r"), purpose='fine-tune')

model_engine = "gpt-3.5-turbo"
batch_size = 5
n_epochs = 1
learning_rate = 0.01
max_tokens = 2048

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
