# Automated-Script-Generation-ML
This project implements automated script generation using transformer-based machine learning models like GPT-2, GPT-3, and LLaMA. It fine-tunes pre-trained models on a dataset of movie scripts to generate coherent and contextually relevant dialogues.
## Features
- Fine-tuning GPT-2 on a custom dataset
- Deploying the model on Hugging Face
- Exposing API for chatbot interaction
- Integrating with a React frontend

## Project Structure
```
├── dataset-gpt.json       # Training dataset
├── train.py               # Script to train the chatbot model
├── app.py                 # Flask API to serve the model
├── requirements.txt       # Dependencies
├── frontend/ https://github.com/vikas83pal/Automated-Script-Generation-UI             # React frontend for the chatbot
└── README.md              # Project documentation
```

## Setup and Installation

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/chatbot-gpt2.git
cd chatbot-gpt2
```

### 2. Install Dependencies
```sh
pip install -r requirements.txt
```

### 3. Train the Model
```sh
python train.py
```

### 4. Deploy on Hugging Face
1. Install the `huggingface_hub` library:
   ```sh
   pip install huggingface_hub
   ```
2. Login to Hugging Face:
   ```sh
   huggingface-cli login
   ```
3. Push the model:
   ```sh
   from transformers import AutoModelForCausalLM, AutoTokenizer
   from huggingface_hub import notebook_login

   notebook_login()
   model.save_pretrained("your-huggingface-repo")
   tokenizer.save_pretrained("your-huggingface-repo")
   ```

### 5. Run the API Locally
```sh
python app.py
```

### 6. Expose API via ngrok (Optional)
```sh
pip install pyngrok
ngrok authtoken YOUR_AUTH_TOKEN
ngrok http 8000
```

### 7. Testing with Postman or Browser
- Open Postman and send a `POST` request to:
  ```sh
  http://localhost:8000/predict
  ```
  With JSON body:
  ```json
  {"input": "What is Machine Learning?"}
  ```

### 8. Integrate with React Frontend
- Go to `frontend/` folder:
  ```sh
  cd frontend
  npm install
  npm start
  ```

## Deploying to GitHub from Google Colab
1. Authenticate GitHub in Colab:
   ```sh
   from google.colab import auth
   auth.authenticate_user()
   ```
2. Set up Git configuration:
   ```sh
   !git config --global user.email "your-email@example.com"
   !git config --global user.name "Your Name"
   ```
3. Clone your repository, add files, commit, and push:
   ```sh
   !git clone https://github.com/yourusername/chatbot-gpt2.git
   %cd chatbot-gpt2
   !git add .
   !git commit -m "Initial commit"
   !git push origin main
   ```

## License
This project is licensed under the MIT License.

---
