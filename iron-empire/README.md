#  Iron Empire — Gym Website

> Fully responsive promotional website for **Iron Empire Gym**. Built with React, featuring a bold dark-themed UI.

---

##  Live Demo

**[https://web-iron-empire.vercel.app/](https://web-iron-empire.vercel.app/)**

---

##  Figma Design

**[View Figma Design](https://www.figma.com/design/cmt28xJaVk3k5pdfu3QbPA/Untitled?node-id=0-1&t=reb3XYcenfCiiggV-1)**

---

## GitHub Repository

**[View Repo](https://github.com/lochani1221/web-iron-empire.git)**

---

## 🛠️ Tech Stack


| Technology | Purpose |
|---|---|
| React 18 | UI Framework — component-based architecture |
| CSS3 | Custom properties (variables), Flexbox, Grid |
| Google Fonts | Bebas Neue · Barlow Condensed · Barlow |
| EmailJS | Contact form API — no backend required |
| Vercel | deployment |

---


## 📁 Folder Structure

```
web-iron-empire/
└── iron-empire/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js         # Sticky responsive navbar
    │   │   ├── Navbar.css
    │   │   ├── Hero.js           # Hero section with animated stats
    │   │   ├── Hero.css
    │   │   ├── About.js          # About / who we are section
    │   │   ├── About.css
    │   │   ├── Services.js       # Service cards with search & filter
    │   │   ├── Services.css
    │   │   ├── Trainers.js       # Trainer profiles with search & filter
    │   │   ├── Trainers.css
    │   │   ├── Plans.js          # Membership pricing plans
    │   │   ├── Plans.css
    │   │   ├── Contact.js        # Advanced contact form + EmailJS
    │   │   ├── Contact.css
    │   │   ├── Footer.js         # Site footer
    │   │   └── Footer.css
    │   ├── utils/
    │   │   └── emailjs.js        # EmailJS configuration
    │   ├── App.js                # Root component
    │   ├── index.js              # Entry point
    │   └── index.css             # Global styles & CSS variables
    ├── package.json
    └── README.md
```



### 1. Clone the repository
```bash
git clone https://github.com/lochani1221/web-iron-empire.git
cd web-iron-empire/iron-empire
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 🌐 Deployment (Vercel)

This project is deployed on **Vercel** with continuous deployment from GitHub.

1. Push code to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Configure these settings:

| Setting | Value |
|---|---|
| Framework Preset | `Create React App` |
| Root Directory | `iron-empire` |
| Environment Variable | `CI` = `false` |

4. Vercel auto-deploys on every push to `main`

---


