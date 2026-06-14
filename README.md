# Bright Future Kindergarten Website

An ultra-modern, premium, and highly interactive school landing page for **Bright Future Kindergarten**. This project features a full-screen interactive 3D sky world hero section built using **React Three Fiber (R3F)**, **Three.js**, and **Framer Motion**, followed by a responsive, parent-friendly marketing website.

---

## 📝 Original Project Requirements (Prompt)

Below is the user prompt that guided the creation of this project:

```text
Create a modern, premium kindergarten school website with a highly interactive 3D hero section.

PROJECT NAME:
Bright Future Kindergarten

DESIGN STYLE:
* Disney-inspired but professional
* Colorful and joyful
* Modern UI
* Parent-friendly
* Mobile responsive
* Fast loading

TECH STACK:
* React
* Vite
* Tailwind CSS
* React Three Fiber
* Three.js
* Framer Motion

HERO SECTION:
Create a full-screen interactive 3D world.
Scene Elements:
* Blue sky gradient background
* Animated fluffy clouds
* Large colorful rainbow
* Cute modern kindergarten school building
* Playground with slide and swing
* School bus parked near the entrance
* Trees with gentle animation
* Butterflies flying around
* Birds moving across the sky
* Floating alphabet letters A B C
* Floating numbers 1 2 3
* Floating stars and learning icons

INTERACTIVITY:
* Mouse movement creates parallax effect
* Clouds move slowly
* Rainbow sparkles
* Butterflies react to cursor movement
* School bus moves slightly during scroll
* Trees sway naturally
* Smooth transitions

HERO CONTENT:
Headline: "Where Little Minds Begin Their Big Adventure"
Subheadline: "A Safe, Creative and Joyful Learning Environment for Every Child"
Buttons:
* Schedule a Visit
* Apply Now

SECTIONS BELOW HERO:
1. About Our School
2. Learning Programs
3. Meet Our Teachers
4. Daily Activities
5. Photo Gallery
6. Parent Testimonials
7. Admission Process
8. Contact Information

SPECIAL FEATURES:
* Animated statistics counters
* Interactive classroom cards
* Virtual school tour section
* Floating clouds throughout the page
* Smooth scrolling animations
* Mobile optimized experience
* Accessibility friendly

COLOR PALETTE:
Primary: #4F9CF9 (Sky Blue)
Secondary: #FFD93D (Sunshine Yellow)
Accent: #FF7F50 (Coral Orange)
Background: #F8FBFF (Soft Ice White)
```

---

## 🚀 How to Run the Project Locally

### Prerequisites
Make sure you have **Node.js** (v18+ recommended) and **npm** installed on your system.

### Step 1: Install Dependencies
Navigate to the project directory and run:
```bash
npm install --legacy-peer-deps
```
*Note: The `--legacy-peer-deps` flag helps resolve peer conflicts between React 19 and current React Three Fiber / Drei packages.*

### Step 2: Start the Development Server
Run the local dev server:
```bash
npm run dev
```
The server will boot up and provide a local address (usually `http://localhost:5173/` or `http://localhost:5174/`). Open this URL in any web browser to see the live site.

---

## 📦 How to Build for Production

To compile the site into optimized static assets for production:
```bash
npm run build
```
This command bundles all React code, compresses styles, processes textures, and outputs production-ready files in the `dist/` directory.

You can preview the production build locally by running:
```bash
npm run preview
```

---

## 🌐 How to Deploy to a Live Domain

Since Vite compiles the application into static HTML, CSS, and JS files (`dist/` folder), you can host it on any modern hosting provider:

### Option A: Vercel (Recommended)
1. Install the Vercel CLI: `npm install -g vercel`
2. Run `vercel` in your project root folder and log in.
3. Follow the terminal prompts. Vercel will automatically detect the Vite build settings and host the site live.
*Alternatively, connect your project repository (GitHub/GitLab) directly to the Vercel Dashboard for automated git deployments.*

### Option B: Netlify
1. Log in to the Netlify Dashboard.
2. Drag and drop the compiled `dist` folder directly into the Netlify deployment box.
*Or link your GitHub repository, specify build command `npm run build` and output folder `dist`.*

### Option C: GitHub Pages
1. Install the gh-pages package: `npm install -D gh-pages`
2. Update `vite.config.js` to include the `base` setting mapping your repo name: `base: '/<repository-name>/'`
3. In `package.json`, add deployment scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy` to publish the page.

---

## 🎨 How to Customize the Website

### 1. Customizing the 3D meshes (React Three Fiber)
All 3D assets in the Hero Canvas are built programmatically using 3D primitives (cubes, cylinders, spheres, cones) located in the `src/components/Hero3D/` folder:
* **School Building** (`SchoolBuilding.jsx`): Customize the positions, geometry dimensions, and color strings of wings, stairs, roofs, windows, double doors, and the clock tower.
* **School Bus** (`SchoolBus.jsx`): Adjust the bus chassis geometry, wheel positions, headlights emissive glow, or scroll tracking scale (`scrollOffset * 0.008`).
* **Playground** (`Playground.jsx`): Customize the swings' sway speed (`time * 2.5`), seats' dimensions, or slide board angles.
* **Forest & Rainbow** (`Environment3D.jsx`): Increase the number of concentric arches in the rainbow, adjust tree positions, butterfly flight radii (`radius={0.6}`), or bird speeds.
* **Floating Letters** (`FloatingElements.jsx`): Edit the floating text strings ("A", "B", "C", "1", "2", "3"), text sizes, or the pencil group scale.

### 2. Modifying Colors, Themes, and Fonts
Tailwind CSS v4 configures themes directly inside `src/index.css` in the `@theme` block:
```css
@theme {
  --font-sans: 'Inter', sans-serif;
  --color-primary: #4F9CF9;
  --color-primary-hover: #3b82f6;
  --color-secondary: #FFD93D;
  --color-accent: #FF7F50;
  --color-brand-bg: #F8FBFF;
}
```
Edit these color variables to immediately update button styles, cards, text tags, and vector accents across the entire website.

### 3. Editing Section Text and Elements
All marketing content is organized into modular files inside the `src/sections/` directory:
* **About Details**: Edit core values, descriptions, and counter numbers in `About.jsx`.
* **Program Modules**: Modify age brackets, course descriptions, and developmental focuses in `Programs.jsx`.
* **Teacher Profiles**: Add/remove educators, adjust certification titles, fun facts, or edit inline SVG hair/hat color paths in `Teachers.jsx`.
* **Daily Routines**: Tweak hour slots, description logs, and "Why We Do It" tips in `DailyActivities.jsx`.
* **Virtual VR Tour**: Add hotspots, change room coordinates, or edit the SVG floorplan visual vectors in `VirtualTour.jsx`.
* **Filterable Photo Gallery**: Modify catalog headings, photo titles, or drawing elements in `PhotoGallery.jsx`.
* **Parent Testimonials**: Update review quotes, star ratings, and initials in `Testimonials.jsx`.
* **Enrollment Steps**: Add/remove admission steps, check-in requirements, or PDF list forms in `Admissions.jsx`.
* **Form Contacts**: Update phone contacts, email mailboxes, maps coordinates, or add input validations in `Contact.jsx`.

### 4. Swapping Visual Background Assets
The website imports high-quality visual backgrounds from the `/public` folder:
* `/hero_sky_background.png`: The whimsical pastel sky wallpaper behind the R3F Canvas.
* `/body_background.png`: The ultra-modern, faint star/cloud wallpaper tiling behind all sections.
* `/classroom_view.png`: The sunlit nursery interior visual shown inside the About section.
You can replace these files with any custom `.png` or `.jpg` assets using the exact same filenames to automatically update the website visuals.
