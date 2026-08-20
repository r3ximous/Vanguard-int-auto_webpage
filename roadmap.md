# System Instructions & Agent Prompt: Vanguard International Automotive Landing Page

> **Role & Context**: You are an expert front-end web developer building a high-performance, mobile-first landing page for **Vanguard International Automotive L.L.C**, a garage repair and auto-servicing business in the UAE.
> **Primary Goal**: Generate a modern, lightning-fast static landing page that drives immediate customer contact via WhatsApp, phone calls, and location navigation.
> **Tech Stack Rules**:
> - Framework: **Astro** (Static Output)
> - Styling: **Tailwind CSS**
> - **STRICT CONSTRAINT**: NO React, NO Framer Motion, NO heavy JS component libraries (shadcn, Watermelon UI, etc.). Maintain 0KB JavaScript bundle for core rendering to guarantee a 95+ mobile Google Lighthouse score.

---

## 1. Project Overview & Target Audience

- **Client Name**: Vanguard International Automotive L.L.C
- **Target Audience**: UAE drivers (Dubai/Sharjah/Abu Dhabi) searching for trustworthy mechanics, auto repairs, custom bodywork, and detailing.
- **Key Conversion Goals**:
  1. Instant WhatsApp Chat link
  2. Mobile Click-to-Call
  3. One-tap Navigation to Garage Location (Google Maps / Waze)
  4. Quick Service Quote Request Form

---

## 2. Directory & Architecture Blueprint

Ensure the codebase follows this exact structure:

```
vanguard-auto/
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── assets/
│   │   └── gallery/        # Local high-res photos for Astro <Image /> optimization
│   │       ├── ppf.jpg
│   │       ├── engine.jpg
│   │       ├── bodywork.jpg
│   │       ├── interior.jpg
│   │       ├── ceramic.jpg
│   │       └── exotic.jpg
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Gallery.astro
│   │   ├── QuoteForm.astro
│   │   ├── Location.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppButton.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 3. Execution Roadmap for Coding Agent

Execute the project in 4 sequential phases. Verify each phase before moving to the next.

### Phase 1: Initialization & Project Foundation

#### Task 1.1: Project Setup
- Initialize Astro project with Tailwind CSS integration:
  ```bash
  npm create astro@latest vanguard-auto -- --template empty --no-git --typescript strict
  cd vanguard-auto
  npx astro add tailwind
  ```

#### Task 1.2: Root Layout Setup (`src/layouts/Layout.astro`)
- Create standard HTML shell with SEO meta tags, OpenGraph tags, mobile viewport configuration, and default dark theme styling (`bg-slate-950 text-slate-100 font-sans`).
- Ensure proper font loading (Inter or standard system font stack).

---

### Phase 2: Core Components Build

#### Task 2.1: Navigation Bar (`src/components/Navbar.astro`)
- Sticky top header with subtle glassmorphic backdrop filter (`bg-slate-950/80 backdrop-blur-md`).
- Brand logo/name: "Vanguard Auto".
- Nav links: Services, Gallery, Location, Contact.
- CTA Button: "Call Now" (`tel:+971XXXXXXXXX`).

#### Task 2.2: Hero Section (`src/components/Hero.astro`)
- High-contrast, mobile-first design.
- Headline: "Premier Automotive Repair & Custom Care in the UAE".
- Subheadline: "Expert mechanic services, custom bodywork, paint protection, and quick diagnostics."
- Dual CTAs:
  - Primary: "Chat on WhatsApp" (`bg-green-600 hover:bg-green-500`)
  - Secondary: "Get Location" (scrolls to `#location`)

#### Task 2.3: Services Grid (`src/components/Services.astro`)
- Responsive CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
- Service Items:
  1. Mechanical Servicing & Diagnostics
  2. Paint Protection Film (PPF) & Wraps
  3. Custom Styling & Bodywork
  4. Paintless Dent Removal (PDR)
  5. High-End Interior & Exterior Detailing
  6. Mobile Service / Emergency Assist
- Clean cards with slate dark borders (`border-slate-800`), hover shadow effects, and icon headers.

#### Task 2.4: Optimized Image Gallery (`src/components/Gallery.astro`)
- **MUST** import local assets from `src/assets/gallery/` and use Astro's native `<Image />` component from `astro:assets`.
- Set explicit `width={800}`, `height={600}`, `format="webp"`, and `quality={80}`.
- Apply aspect ratio constraint (`aspect-[4/3]`) and subtle zoom transform on hover (`group-hover:scale-105 transition-transform duration-500`).

---

### Phase 3: High-Converting Features (UAE Market Focused)

#### Task 3.1: Floating WhatsApp Button (`src/components/WhatsAppButton.astro`)
- Fixed position: `fixed bottom-6 right-6 z-50`.
- Official WhatsApp brand color (`bg-[#25D366]`).
- Hover tooltip: "Need a quote? Chat with us!"
- Direct link format: `https://wa.me/971XXXXXXXXX?text=Hello%20Vanguard%20Automotive%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`

#### Task 3.2: Location & Deep Linking (`src/components/Location.astro`)
- Embedded responsive Google Map iframe.
- Physical address text and operating hours (e.g., Sat-Thu: 8am - 8pm).
- One-tap navigation buttons:
  - "Open in Google Maps": `https://maps.google.com/?q=LATITUDE,LONGITUDE`
  - "Open in Waze": `https://waze.com/ul?ll=LATITUDE,LONGITUDE&navigate=yes`

#### Task 3.3: Zero-Backend Contact Form (`src/components/QuoteForm.astro`)
- Lightweight HTML form pointing to Web3Forms API endpoint (`https://api.web3forms.com/submit`).
- Fields: Full Name, Phone Number (with +971 default placeholder), Vehicle Make & Model, Required Service Dropdown, Notes.
- Hidden access key input field for email forwarding without a custom server.

---

### Phase 4: Production Build & Validation

#### Task 4.1: Main Page Assembly (`src/pages/index.astro`)
- Import and assemble all components in logical order:
  `Layout` > `Navbar` > `Hero` > `Services` > `Gallery` > `Location` > `QuoteForm` > `Footer` > `WhatsAppButton`.

#### Task 4.2: Build Verification & Audit
- Run `npm run build` to verify zero build errors.
- Confirm output static HTML files in `dist/`.
- Validate that zero JS bundles are loaded for layout/content rendering.

---

## 4. Agent Quality Checklist

Before completing tasks, verify:
- [ ] Mobile responsive layout tested down to 320px screen width.
- [ ] All phone links use `tel:` and WhatsApp links use `wa.me` with international country code `971`.
- [ ] Images are optimized via Astro `<Image />` component (WebP format).
- [ ] No external heavy JS libraries introduced.
- [ ] Color palette stays consistent: Slate dark backgrounds (`slate-950`, `slate-900`), Amber/Gold accent (`amber-500`), WhatsApp Green (`#25D366`).
