# Solidus Group, L.P. — Landing Page

A premium, futuristic dark-mode landing page for **Solidus Group, L.P.** and its subsidiary **Nova Ltd.**

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).

---

##  Features

- **Dark Mode Only** — Elegant, minimalist, and futuristic design
- **Interactive Star Field** — Canvas-based particle background that reacts to mouse movement
- **Video Hero** — Supports MP4 video loop as the hero background
- **Bilingual (ID/EN)** — Floating language toggle for instant switching
- **Scroll Animations** — Smooth reveal animations powered by Framer Motion
- **Interactive Portfolio** — 3 investment pillars with hover effects
- **Contact Form** — Clean, functional contact form UI
- **Fully Responsive** — Optimized for desktop, tablet, and mobile

##  Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/rhavans/solidus-landing.git
cd solidus-landing

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Video Background (Optional)
To add a video background to the Hero section:
1. Place your `.mp4` file in the `public/` folder
2. Rename it to `hero-video.mp4`
3. Refresh the page — the video will auto-play behind the hero text

##  Deploy on Vercel

The easiest way to deploy this app:

1. Fork or import this repository into your own GitHub account
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import the repository from GitHub
4. Vercel will auto-detect Next.js — just click **Deploy**
5. Done! Your site will be live in seconds

> **Note:** No environment variables are required for this project.

##  Project Structure

```
solidus-landing/
├── public/              # Static assets (logos, images, video)
├── src/
│   ├── app/             # Next.js App Router (layout, page, globals.css)
│   └── components/
│       ├── sections/    # Page sections (Hero, About, VisiMisi, etc.)
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── LanguageContext.tsx
│       └── ParticleBackground.tsx
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

##  Color Palette

| Color         | Hex       | Usage                |
|---------------|-----------|----------------------|
| Black         | `#000000` | Primary background   |
| Dark Green    | `#141e11` | Accent / subtle tint |
| Dark Blue     | `#021c36` | Accent / gradients   |
| White         | `#FFFFFF` | Text / foreground    |

##  License

This project is private and proprietary to Solidus Group, L.P.
