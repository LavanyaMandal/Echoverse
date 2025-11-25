# EchoVerse – AI Chatbot Web Application  
> 🚀 Fullstack project developed as part of internship assessment.  
> Focus: Clean architecture, real-world thinking & functional deployment.

---

## 📌 Tracks Covered (Based on Assignment)

| Track | Status | Description |
|------|--------|-------------|
| **Track 1 – Frontend (Mock Data)** | ✔ Completed | Fully responsive UI using HTML/CSS/JS with dynamic JavaScript |
| **Track 2 – Backend (API + Database)** | ✔ Completed | CRUD API implemented (Flask + JSON) |
| **Track 3 – Fullstack (Web + API)** | ✔ Completed | EchoVerse integrates frontend + backend + AI API + deployment |

---

## 🔗 Live Deployment (Render Hosted)

👉 **https://echoverse-qg2w.onrender.com**

⚠ *Note: This is a free Render instance – the first response may take **20–40 seconds** to wake up.*

---

## 🛠 Tech Stack Used

| Layer | Technology |
|------|-------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Flask (Python) |
| AI API | OpenAI / Gemini |
| Deployment | Render |
| Version Control | Git & GitHub |

---

## 📂 Folder Structure

Echoverse/
│── static/ # CSS / JS / audio files
│── templates/ # HTML frontend
│── screenshots/ # UI preview images
│── app.py # Flask backend
│── requirements.txt # Dependencies
│── .env (ignored) # API keys
│── .gitignore # Security configs
└── README.md


---

## 📸 Screenshots (UI Preview)

### 🖥️ Chat Interface  
![EchoVerse UI](./screenshots/ui_preview.png)  

---

## ⚙️ Setup Instructions (Local Run)

```bash
# 1️⃣ Clone the repository
git clone https://github.com/LavanyaMandal/Echoverse.git
cd Echoverse

# 2️⃣ Create & activate virtual environment
python -m venv venv
venv\Scripts\activate     # Windows
# OR
source venv/bin/activate  # Mac/Linux

# 3️⃣ Install Python dependencies
pip install -r requirements.txt

# 4️⃣ Create .env file (IMPORTANT – not pushed to GitHub)
OPENAI_API_KEY=your_api_key_here

# 5️⃣ Run the app locally
python app.py

# Then open in browser:
http://127.0.0.1:5000/
