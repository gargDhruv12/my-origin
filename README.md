# 🚀 MyOrigin  
## AI-Powered Personalized Career Intelligence Platform

<p align="center">
  <img src="public/images/banner.png" width="900" />
</p>

<p align="center">
  <b>Build smarter careers with AI-driven resumes, assessments, insights, and performance tracking.</b>
</p>

---

## 🌟 About MyOrigin

**MyOrigin** is an AI-powered **Personalized Career Intelligence Platform** that helps students and professionals **build ATS-friendly resumes**, **practice AI-generated quizzes**, **track performance**, and **stay updated with industry trends** — all from a single personalized dashboard.

---

## 🖼️ Platform Preview

### 🏠 Home & Onboarding
<p align="center">
  <img src="public/images/home.png" width="800" />
</p>

### 📊 Personalized Dashboard
<p align="center">
  <img src="public/images/dashboard.png" width="800" />
</p>

### 📝 ATS Resume Builder
<p align="center">
  <img src="public/images/resume-builder.png" width="800" />
</p>

### 🧠 AI-Generated Quizzes
<p align="center">
  <img src="public/images/quiz.png" width="800" />
</p>

### 📈 Industry Insights
<p align="center">
  <img src="public/images/insights.png" width="800" />
</p>

---

## 🎯 Key Features

### 📝 ATS-Optimized Career Documents
- AI-generated **ATS-friendly resumes**
- Smart **cover letter generation**
- Markdown-based rendering using **React Markdown**

### 🧠 AI-Powered Skill Assessment
- Personalized quizzes using **Gemini API**
- Adaptive difficulty
- Instant feedback & improvement tips

### 📊 Performance Dashboard
- Skill-wise progress tracking
- Weekly growth analytics
- Career readiness indicators

### 📈 Industry Intelligence
- **Weekly updated industry insights**
- Role-based recommendations
- Market trend analysis

### 📄 Export & Sharing
- Resume and reports exportable as **PDF**
- Clean formatting using **HTML → PDF**

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,postgres,js,html,css" />
</p>

- **Next.js**
- **React.js**
- **PostgreSQL**
- **Clerk (Authentication)**
- **Google Gemini API**
- **React Markdown**
- **HTML2PDF**

---

## 🧩 Architecture Overview

<p align="center">
  <img src="public/images/architecture.png" width="850" />
</p>

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/gargDhruv12/my-origin.git
cd my-origin
2️⃣ Install Dependencies
Make sure Node.js v18 or above is installed.

bash
Copy code
npm install
3️⃣ Setup Environment Variables
Create a .env.local file in the root directory.

bash
Copy code
touch .env.local
Add the following variables to .env.local:

env
Copy code
# Neon PostgreSQL Database
DATABASE_URL="postgresql://<username>:<password>@<neon-host>/<database>?sslmode=require"

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
4️⃣ Setup Prisma (Neon DB)
Generate Prisma client:

bash
Copy code
npx prisma generate
Push schema to Neon:

bash
Copy code
npx prisma db push
(Optional – open Prisma Studio)

bash
Copy code
npx prisma studio
5️⃣ Start Inngest (Background Jobs)
bash
Copy code
npx inngest dev
Keep this running in a separate terminal.

6️⃣ Start Development Server
bash
Copy code
npm run dev
7️⃣ Open in Browser
Visit 👉 http://localhost:3000

🎉 MyOrigin is now running locally.
