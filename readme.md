# 🍃 CleanCeylon

**Live Deployment:** [https://cleanceylon.vercel.app/]

CleanCeylon is an interactive web platform designed to bridge the gap between household waste segregation and local recycling infrastructure in Sri Lanka. By providing a centralized directory for e-waste and recyclables, alongside community Shramadana tracking, the application aims to reduce illegal dumping and promote a circular economy.

*Designed and developed as an academic initiative for the Bachelor of Science in Information Systems degree program at Sabaragamuwa University of Sri Lanka.*

---

## ✨ Key Features

*   **EcoFinder Search Engine:** A dynamic, client-side search tool to instantly identify proper disposal methods and bin colors for various household items.
*   **Verified Collection Directory:** Curated listings of certified Sri Lankan recycling centers (e.g., Cleantech, Neptune Recyclers) organized by waste category.
*   **Community Events (Shramadana):** Interactive event boards featuring volunteer tracking and persistent RSVP state management utilizing the browser's Web Storage API (`localStorage`).
*   **EcoChallenge Quiz:** An educational module featuring instant feedback validation and a dynamic CSS progress bar to foster sustainable habits.
*   **Actionable Eco-Habits:** A fully responsive CSS Grid layout showcasing everyday, practical tips tailored to Sri Lankan households.

---

## 🛠️ Technical Architecture

CleanCeylon is built entirely with a strict vanilla front-end stack, demonstrating core web engineering principles without relying on bloated external frameworks like Bootstrap.

*   **HTML5:** Semantic, multi-page routing architecture ensuring distinct, accessible page loads.
*   **CSS3:** Custom cream and sage green aesthetic featuring advanced CSS Grid and Flexbox layouts, modern 3D interactive frame UI, inline SVGs, and responsive media queries for mobile optimization.
*   **Vanilla JavaScript (ES6+):** Client-side DOM manipulation, page-safe execution guards, array filtering, and robust data persistence using `localStorage`.
*   **Hosting:** Deployed via **Vercel** with automatic HTTPS encryption and edge caching.

---

## 📁 File Structure

```text
cleanceylon/
├── index.html           # Home page, EcoFinder, and Daily Eco-Habits
├── directory.html       # Verified recycling centers directory
├── events.html          # Shramadana community cleanups and reporting form
├── quiz.html            # Interactive EcoChallenge module
├── about.html           # Platform mission and academic initiative details
├── style.css            # Global stylesheet, UI themes, and responsive grids
├── main.js              # State management, search logic, and UI interactions
└── images/              # Locally hosted, optimized image assets