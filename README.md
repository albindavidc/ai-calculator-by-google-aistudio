# 🔢 **MathMind – AI-Powered Math Intelligence**

A hybrid **AI + Standard Calculator** built with **React, TypeScript, and Vite**, enhanced by **Google Gemini 2.5 Flash** for solving complex mathematical problems, showing reasoning, and providing step-by-step solutions.

MathMind combines speed, clarity, and intelligence—perfect for students, engineers, and anyone working with numbers.

---

## 🚀 **Live Demo**

**GitHub Pages Deployment:**
https://albindavidc.github.io/MathMind/

---

## ✨ **Features**

### 🧮 **Standard Calculator**

* Fast, responsive scientific keypad
* Real-time arithmetic with operator chaining
* Clean, monospace display
* Error handling & input sanitization

### 🤖 **AI Solver Mode (Gemini 2.5 Flash)**

* Natural language math questions
* Solves:

  * Algebra
  * Word problems
  * Geometry
  * Derivatives
  * Unit conversions
  * Multi-step reasoning
* Structured JSON response:
  **answer + steps + reasoning**

### 📜 **History Sidebar**

* Stores both AI and standard calculations
* Timestamped logs
* Step-by-step explanations
* One-click clear

### ✨ **Beautiful UI & Animations**

* Neon-themed dark design
* Glassmorphism cards
* Animated splash screen
* Smooth transitions
* Fully responsive

---

## 📁 **Project Structure**

```
albindavidc-mathmind/
│── App.tsx
│── index.tsx
│── index.html
│── package.json
│── tsconfig.json
│── vite.config.ts
│── constants.ts
│── types.ts
│── metadata.json
│
├── components/
│   ├── AIInterface.tsx
│   ├── Calculator.tsx
│   ├── HistorySidebar.tsx
│   └── SplashScreen.tsx
│
├── services/
│   └── geminiService.ts
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ⚙️ **Tech Stack**

### **Frontend**

* React 19
* TypeScript
* TailwindCSS
* Vite
* PWA

### **AI**

* Google Gemini 2.5 Flash
* JSON schema-driven responses
* Structured math reasoning

### **Deployment**

* GitHub Actions
* GitHub Pages

---

## 🛠️ **Environment Variables**

MathMind uses an API key for Gemini.

Set this in your GitHub repo:

```
Settings → Secrets → Actions → New Secret → API_KEY
```

The app automatically picks it from:

```ts
process.env.API_KEY
```

---

## 🧩 **Local Development**

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start development server

```bash
npm run dev
```

### 3️⃣ Build for production

```bash
npm run build
```

### 4️⃣ Preview production build

```bash
npm run preview
```

---

## 🚀 **Automatic Deployment (GitHub Actions)**

This repo includes:

```
.github/workflows/deploy.yml
```

Deployment happens when you:

* Push to **main**
* Or manually trigger from Actions

The output is automatically published to **GitHub Pages**.

To enable Pages:

1. Go to **Settings → Pages**
2. Set **Source = GitHub Actions**

Done. Every push updates the live site.

---

## 🧠 **AI Mode Details**

MathMind sends structured requests to Gemini:

### Input

User prompt or math problem.

### Output Schema

```json
{
  "answer": "string",
  "steps": ["string"],
  "reasoning": "string"
}
```

The interface displays:

* The final answer
* Steps (in the History Sidebar)
* A brief reasoning section

---

## 🧼 **Code Quality**

Configured with:

* `"strict": true` in TypeScript
* `"noUnusedLocals": true`
* `"noUnusedParameters": true`
* Modular components
* Clean service layers

---

## 🤝 **Contributing**

Pull requests are welcome!
Open issues, submit improvements, or request features.

---

## 🔒 **Security**

* API key stored via GitHub Secrets
* Build injects environment-based secure keys
* No API key appears in version control

---

## 📄 **License**

MIT License
Free to use, modify, and improve.

---

## 👨‍💻 **Author**

**Albin David C**
Building modern, intelligent, beautifully-designed web applications.
