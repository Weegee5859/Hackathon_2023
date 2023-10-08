import os
import openai  # !pip install openai==0.27.9
openai.api_key = "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"

res = openai.File.create(
    file=open("eppep.py", "r"),
    purpose='fine-tune'
)
res
