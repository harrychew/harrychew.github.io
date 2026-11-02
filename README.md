# Harry Chew — Cybersecurity Portfolio Website

A high-tech, futuristic personal portfolio and resume website for a cybersecurity professional. Built with React, TypeScript, Tailwind CSS, and a custom neon-green cyberpunk aesthetic.

🔗 **Live Site:** [https://harrychew.com](https://harrychew.com)  
📂 **Repository:** [https://github.com/harrychew/harrychew.github.io](https://github.com/harrychew/harrychew.github.io)

---

## 🎨 Design Overview

**Visual Style:** Dark console with restrained terminal details
**Color Palette:**
- Background: `#0B0F14`
- Accent: `#F5B544` (amber)
- Text: `#E6EAF0`

**Fonts:** Geist and Geist Mono

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | UI component primitives |
| **Lucide React** | Icon library |
| **GSAP** (ready) | Animation framework (installed, optional use) |

---

## 📁 Project Structure

```
my-app/
├── public/
│   ├── profile-portrait.jpg      # Your profile photo
│   ├── project-cloud.jpg         # Project card image
│   ├── project-phishing.jpg      # Project card image
│   ├── project-siem.jpg          # Project card image
│   ├── logos/                    # Certification issuer logos
│   │   ├── offsec.png
│   │   ├── altered-security.png
│   │   ├── tcm-security.png
│   │   ├── secops-group.png
│   │   └── ine-security.png
│   └── CNAME                     # Custom domain config
├── src/
│   ├── App.tsx                   # Main app with all sections
│   ├── index.css                 # Global styles & Tailwind
│   ├── main.tsx                  # Entry point
│   └── sections/                 # (for future section splitting)
├── dist/                         # Production build output
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 Sections

1. **Hero:** headline, intro and portrait
2. **Results:** headline numbers
3. **Career:** offence, advisory and defence roles
4. **Impact:** interactive map from capability to credentials, skills and results
5. **Value:** what I want to bring, with proof
6. **Background:** education, research, international work and interests
7. **Contact:** links and a form sent through Formspree

---

## 🚀 Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Runs at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Output goes to `dist/`

### Preview Production Build
```bash
npm run preview
```

---

## 🌍 Deployment (GitHub Pages)

This site is configured for GitHub Pages deployment.

### Deploy Command
```bash
npm run deploy
```
This runs:
1. `npm run build` — creates production build in `dist/`
2. Pushes `dist/` to the `gh-pages` branch
3. GitHub Pages serves from `gh-pages`

### Custom Domain Setup
1. The `public/CNAME` file contains `harrychew.com`
2. In your domain registrar's DNS settings, add 4 A records pointing to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a CNAME record for `www` → `harrychew.github.io`
4. In GitHub repo Settings → Pages, enable "Enforce HTTPS"

---

## 🔐 Security Notes

This repository is **safe for public hosting**. It contains:
- ✅ Publicly shareable certification credential IDs (for verification)
- ✅ Public contact information (email, LinkedIn, GitHub)
- ✅ Publicly available project descriptions
- ❌ **No API keys, passwords, secrets, or private credentials**

**What is public by design:**
- Certification IDs (OS-BWA-25182, AZLID2772, etc.) — these are public verification numbers issued by certification bodies
- Contact email and social links — standard resume information
- Work experience details — publicly listed on LinkedIn

---

## 📝 Customization Guide

### Update Content
Edit the `stats`, `roles`, `capabilities` and `values` arrays at the top of `src/App.tsx`.

### Update Profile Photo
Replace `public/profile-portrait.jpg` with your new photo (keep same filename).

### Update Contact Info
Edit the `EMAIL`, `LINKEDIN_URL` and `GITHUB_URL` constants at the top of `src/App.tsx`.

---

## 📜 License

© 2026 Harry Chew. All rights reserved.

This is a personal portfolio website. The design, code, and assets are proprietary. Certification logos belong to their respective owners (OffSec, Altered Security, TCM Security, The SecOps Group, INE Security).

---

## 🤝 Credits

- Design & Development: Kimi AI Agent
- Fonts: Space Grotesk, Inter, IBM Plex Mono (Google Fonts)
- Icons: Lucide React
- UI Components: shadcn/ui
