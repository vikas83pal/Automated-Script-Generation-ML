# Automated Script Generation using Machine Learning

This project implements automated script generation using transformer-based machine learning models like GPT-2, GPT-3, and LLaMA. It fine-tunes pre-trained models on a dataset of movie scripts to generate coherent and contextually relevant dialogues.

## Features
- Fine-tuning GPT-2 on a custom dataset
- Deploying the model on Hugging Face Spaces
- Exposing API for chatbot interaction
- Integrating with a React frontend

## Deployment on Hugging Face Spaces
The model is deployed on Hugging Face Spaces using Gradio, which provides a user-friendly web interface for interaction. Below are the steps involved in deployment:

1. **Prepare the Model:**
   - Use `transformers` from Hugging Face to load and fine-tune GPT-2 on a dataset of movie scripts.
   - Save the trained model and tokenizer for deployment.

2. **Create a Hugging Face Space:**
   - Navigate to [Hugging Face Spaces](https://huggingface.co/spaces) and create a new space.
   - Select `Gradio` as the application type.

3. **Upload the Model and Code:**
   - Push the fine-tuned model and script files to the space repository using Git.
   - Implement a `Gradio` interface for real-time text generation.

4. **Expose the API:**
   - The Gradio interface runs on `server_name="0.0.0.0", server_port=7860`.
   - The model API is available for integration with external applications like a React frontend.

## Screenshots
![Screenshot 1](WhatsApp-Image-2025-03-07-at-17.52.22_fb2acb05.jpg)
![Screenshot 2](WhatsApp-Image-2025-03-07-at-17.52.20_916a95df.jpg)
![Screenshot 3](Screenshot-2025-03-07-180743.png)
![Screenshot 4](Screenshot-2025-03-07-181039.png)
![Screenshot 5](Screenshot-2025-03-07-181135.png)


## Visit the Web Interface
Click the link below to interact with the AI script generator:

🔗 [Hugging Face Space](https://huggingface.co/spaces/vikas83/bert-text-generator)
