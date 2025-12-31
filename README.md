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

<details>
<summary><strong>Step 1 — Clone the Repository</strong></summary>

```bash
git clone https://github.com/gargDhruv12/my-origin.git
cd my-origin
</details> <details> <summary><strong>Step 2 — Install Dependencies</strong></summary>
bash
Copy code
npm install
</details> <details> <summary><strong>Step 3 — Setup Environment Variables</strong></summary>
Create a .env.local file:

bash
Copy code
touch .env.local
Add the following:

env
Copy code
DATABASE_URL="postgresql://<username>:<password>@<neon-host>/<database>?sslmode=require"

CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

GEMINI_API_KEY=your_gemini_api_key

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
</details> <details> <summary><strong>Step 4 — Setup Prisma (Neon DB)</strong></summary>
bash
Copy code
npx prisma generate
npx prisma db push
</details> <details> <summary><strong>Step 5 — Start Inngest</strong></summary>
bash
Copy code
npx inngest dev
</details> <details> <summary><strong>Step 6 — Start Development Server</strong></summary>
bash
Copy code
npm run dev
</details> <details> <summary><strong>Step 7 — Open in Browser</strong></summary>
Visit 👉 http://localhost:3000
🎉 MyOrigin is now running locally.

</details> ```
