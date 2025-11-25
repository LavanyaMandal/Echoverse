# EchoVerse – AI Chatbot Web Application  
> Fullstack project developed as part of internship coding challenge.  
> Focus on clean architecture, problem solving & deployment.

---

## 🚀 Project Overview
EchoVerse is an AI-powered chatbot web app that gives real-time responses, remembers chat context, and supports text-to-speech.  
This app uses Flask backend + HTML/CSS/JS frontend and is fully deployed online.

---

## 🛠 Tech Stack Used

| Layer        | Technologies |
|--------------|---------------|
| Frontend     | HTML, CSS, JavaScript |
| Backend      | Python (Flask) |
| Deployment   | Render |
| Version Control | Git & GitHub |

---

## 📁 Folder Structure

Echoverse/
│── static/
│── templates/
│── app.py
│── requirements.txt
│── .env (ignored)
│── .gitignore

---

## 📌 Features

✔ Interactive chatbot interface  
✔ Flask-based backend API  
✔ Memory support (chat history)  
✔ Text-to-Speech (TTS)  
✔ Responsive UI  
✔ Secure environment (API keys not in repo)  
✔ Deployment done on Render  

---

## 🔒 Security

- `.env` file added to `.gitignore` to prevent API key leaks  
- Virtual environment (`venv/`) removed before pushing to GitHub  
- Ready for authentication integration in next version  

---

## ⚙️ Setup (Local Run)

```bash
git clone https://github.com/LavanyaMandal/Echoverse.git
cd Echoverse

python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt

# Create .env file manually in root folder:
OPENAI_API_KEY=your_api_key_here

python app.py


## 🌍 Live Deployment (Click to Try)
🔗 https://echoverse-qg2w.onrender.com  
(This app may take 30–50 seconds to wake up because it’s hosted on a free Render instance.)


---

## 📸 Screenshots

| Chat UI | AI Response Example |
|---------|----------------------|
| ![UI Screenshot](screenshots/ui.png) | ![Response Screenshot](screenshots/response.png) |

