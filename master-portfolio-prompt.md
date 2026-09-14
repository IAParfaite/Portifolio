# 🚀 Master Portfolio Prompt — For OpenCode

> Copy everything below the line and paste it into OpenCode as your build instruction.

---

## PROMPT START

You are an expert full-stack developer, UI/UX designer, and branding strategist. Build a **premium, production-grade personal portfolio website** for a developer named **Alliance Parfaite Isingizwe** — a full-stack developer, designer, and system architect.

### 🎯 GOAL
Design and build a modern, confident, creative, and approachable portfolio that feels like a **premium SaaS landing page**, not a generic template. The final product must look like it was designed by a top-tier agency: intentional typography, smooth motion, generous whitespace, and a cohesive color system — not default Bootstrap/Tailwind starter aesthetics.

---

### 🛠️ TECH STACK
- **Frontend:** React (or Next.js) + TailwindCSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (for contact form submissions / dynamic content)
- **Architecture:** MERN stack, fully responsive, mobile-first
- **Animations:** Framer Motion (or equivalent) for scroll reveals, hover states, and section transitions
- **Deployment-ready:** clean folder structure, environment variables for API keys, production build config

---

### 🎨 DESIGN DIRECTION
- Confident, modern, slightly bold — dark-mode-first with an accent color (electric blue, emerald, or violet gradient — choose one cohesive palette, not rainbow).
- Strong typographic hierarchy: a distinctive display font for headings, clean sans-serif for body text.
- Subtle grid/glow/gradient background details — avoid plain white cards and default shadows.
- Micro-interactions on buttons, links, and project cards (hover lift, gradient glow, smooth scroll).
- Fully responsive across mobile, tablet, and desktop.
- Consistent spacing system and component reuse (buttons, cards, badges) — no one-off inconsistent styling.

---

### 📐 SITE STRUCTURE & SECTIONS

**1. Hero Section**
- Full-height intro with name, title ("Full-Stack Developer · System Architect · Designer"), and a short, punchy tagline.
- Confident one-liner bio (2–3 sentences max) that sells the mix of dev + design + architecture skill.
- Primary CTA button ("View My Work") + secondary CTA ("Let's Connect").
- Subtle animated background (particles, gradient mesh, or grid).

**2. About Me**
- Placeholder image block with the exact caption text: **"and that is me."**
- Short personal + professional story: journey into MERN stack, system design, and design tools.
- Mention passion for problem-solving, mathematics, and clean architecture (ERDs/DFDs).
- Personality touch: mention love of movies/songs and quote-collecting to humanize the brand.

**3. Projects**
- Grid/card layout for featured projects.
- Each card: title, short description, tech stack tags, live link, GitHub link, and a placeholder image/screenshot.
- Include a "View All Projects" or "More on GitHub" link.
- Placeholder data structure so real projects can be swapped in easily (JSON array or CMS-ready).

**4. Skills**
- Categorized skill display (not just a plain list):
  - **Frontend:** React, Next.js, TailwindCSS, JavaScript
  - **Backend:** Node.js, Express, Laravel basics
  - **Databases:** MongoDB, MySQL, NoSQL
  - **Mobile:** Flutter
  - **Systems & Architecture:** ERDs, DFDs, logic design
  - **Design:** Figma, Canva
  - **Tools:** GitHub, version control, collaboration workflows
- Use progress bars, icon grids, or animated badges — visually interesting, not a boring bullet list.

**5. Machine Learning**
- Dedicated section highlighting ML fundamentals knowledge.
- Frame it as an emerging strength: mention math/problem-solving foundation as the base for ML work.
- Optional: showcase a mini ML-related project, notebook, or concept demo (placeholder-ready).

**6. Hobbies**
- Personal, lighter-tone section: reading and collecting quotes from movies and songs.
- Interactive touch: a rotating/animated "quote of the day" component or a small quote carousel.
- Keep it warm and approachable — this section should feel human, not corporate.

**7. Contact**
- Functional contact form (Name, Email, Message) that POSTs to an Express/MongoDB backend endpoint (store submissions + optional email notification via Nodemailer).
- Direct links: Email, GitHub, LinkedIn, and any other social/project links (use placeholder URLs, clearly labeled for easy swapping).
- Form validation + success/error state handling with clean UI feedback (no ugly browser alerts).

**8. Footer**
- Repeat key links (GitHub, LinkedIn, Email).
- Small tagline or quote.
- Copyright with dynamic year.

---

### 🔗 LINKS & INTEGRATIONS
- Include a clearly organized links section/component (in Contact and Footer) linking out to: GitHub profile, LinkedIn, other project deployments, and any personal sites — use placeholder URLs labeled `[ADD_LINK_HERE]` so they're easy to find and replace.

---

### ✅ TONE & VOICE
Write all copy (headings, bio, microcopy, button text) in a tone that is:
- **Confident** — no hedging language, no "aspiring developer," speak like someone who delivers.
- **Creative** — avoid generic phrases like "passionate about coding"; use vivid, specific language.
- **Approachable** — warm and human, especially in About Me and Hobbies sections.

---

### 📁 DELIVERABLES
- Clean, componentized codebase (organized `/components`, `/pages` or `/app`, `/server`, `/models`).
- Reusable Tailwind design tokens (colors, spacing, fonts defined in config).
- Backend route(s) for the contact form connected to MongoDB.
- Fully responsive, accessible (semantic HTML, alt text, keyboard navigation).
- Placeholder content clearly marked so Alliance can swap in real project data, images, and links easily.
- Include comments in code where content/data should be personalized.

Build this as a premium, portfolio-grade product — the kind of site that gets shared, not just visited.

## PROMPT END

---

### 💡 Quick tips for using this in OpenCode
- Paste the whole block as your first instruction/task.
- If OpenCode asks clarifying questions, answer with your real project names, links, and photo before it generates final content.
- Once the base site is generated, you can follow up with smaller prompts like *"now add dark/light mode toggle"* or *"add a downloadable resume button in the Hero section"* to iterate.
