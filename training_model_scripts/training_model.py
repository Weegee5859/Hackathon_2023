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

fine_tuning_job = openai.FineTuningJob.create(
    model=model_engine,
    training_file=training_file_id,
)

print(fine_tuning_job)
