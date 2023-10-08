import openai

from time import sleep

while True:
    res = openai.FineTuningJob.retrieve(job_id)
    if res["finished_at"] != None:
        break
    else:
        print(".", end="")
        sleep(100)
