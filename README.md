# Harry Chew — Cybersecurity Portfolio Website

A high-tech, futuristic personal portfolio and resume website for a cybersecurity professional. Built with React, TypeScript, Tailwind CSS, and a custom neon-green cyberpunk aesthetic.

🔗 **Live Site:** [https://harrychew.com](https://harrychew.com)  
📂 **Repository:** [https://github.com/harrychew/harrychew.github.io](https://github.com/harrychew/harrychew.github.io)

---

## 🎨 Design Overview

**Visual Style:** Neon-noir, high-tech, cinematic, grid-based, futuristic  
**Color Palette:**
- Background: `#05060B` (deep space black)
- Accent: `#39FF14` (neon green)
- Text: `#F2F5F9` (near-white)

**Key Features:**
- Persistent HUD corner frames with pulse animation
- Animated particle background
- Scanline overlay texture
- Grid drift animation
- Neon glow effects on hover
- Fully responsive (desktop, tablet, mobile)

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
│   ├── App.css                   # Component-specific styles
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

### 1. Hero
- Full-screen intro with animated crosshair
- "SECURE THE FUTURE / BREAK THE THREAT" headline
- Quick stats: 4+ years, 7 certifications, 50+ projects
- CTAs: View Experience, Contact Me

### 2. Profile
- Professional photo with cyber-noir border frame
- Bio and quick stats (location, experience, focus, availability)
- Social links (LinkedIn, GitHub)

### 3. Experience Timeline
Chronological career history:
- **Senior Analyst – Cybersecurity** (Assistant Manager)  
  *Sunway Shared Services* · Aug 2024 – Present
- **Senior Associate – Cybersecurity**  
  *PwC (PricewaterhouseCoopers)* · Jan 2023 – Jul 2024
- **Specialist Cyber Security** (SOC Analyst L1)  
  *Infineon Technologies* · Oct 2020 – Dec 2022
- **Intern – IT Security**  
  *LGMS – LE Global Services* · May 2019 – Aug 2019

### 4. Skills Matrix
Three categories with skill tags:
- **Offensive Security:** Penetration Testing, Web/Mobile Testing, Network Exploitation, etc.
- **Defensive Operations:** Incident Response, SIEM, Threat Hunting, Digital Forensics, etc.
- **Cloud & Automation:** AWS/Azure Security, Python/Bash, CI/CD Security, etc.
- **Technologies & Tools:** 24+ tools listed

### 5. Certifications
7 industry-recognized certifications with:
- Company logos (OffSec, Altered Security, TCM Security, etc.)
- Credential IDs
- Direct verification links to official credential pages

| Cert | Issuer | Year |
|---|---|---|
| OSWP | OffSec | Feb 2026 |
| CARTP | Altered Security | Jul 2025 |
| CAPv2 | The SecOps Group | Nov 2024 |
| CRTP | Altered Security | Oct 2024 |
| OSCP | OffSec | Mar 2024 |
| PNPT | TCM Security | Jun 2023 |
| eCIR | INE Security | Oct 2021 |

### 6. Projects
Three project showcases with AI-generated imagery:
- CloudSec Assessment Toolkit
- Phishing Simulation Platform
- Detection Rule Library

### 7. Contact & Footer
- Contact form (Name, Email, Subject, Message)
- Direct contact links (Email, LinkedIn, GitHub, Location)
- Footer with copyright and resume PDF link

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

### Update Experience
Edit `src/App.tsx` — find the `experiences` array in `ExperienceSection`.

### Update Certifications
Edit `src/App.tsx` — find the `certifications` array in `CertificationsSection`.

### Update Skills
Edit `src/App.tsx` — find the `skillCategories` array in `SkillsSection`.

### Update Profile Photo
Replace `public/profile-portrait.jpg` with your new photo (keep same filename).

### Update Contact Info
Edit the `contactInfo` array in `ContactSection` within `src/App.tsx`.

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
