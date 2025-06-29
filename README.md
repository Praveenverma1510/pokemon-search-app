
# Pokémon Search App 🧢

A responsive and dynamic Pokémon search application built using **Next.js (App Router)**, **Tailwind CSS**, and the **PokéAPI**.

🔗 **Live Demo**: [https://stackblitz.com/~/github.com/Praveenverma1510/pokemon-search-app]

---

## 📦 Tech Stack

- [Next.js (App Router)](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/docs/v2)
- Server Components & Client Components
- Dynamic Routing
- Server Actions & Server-side Rendering
- Custom React Hooks

---

## ✨ Features

✅ Pokémon search and filter  
✅ Filter by Pokémon type  
✅ Live filtering using text input  
✅ Display Pokémon cards with image and name  
✅ Dynamic route for Pokémon detail page  
✅ Responsive design (Mobile-first)  
✅ Breadcrumb navigation (`Home -> PokemonName`)  
✅ Custom hooks for data fetching and filtering  
✅ Server-side rendering for performance

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pokemon-search-app.git
cd pokemon-search-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 📁 Project Structure

```
app/
├── layout.tsx           # Root layout
├── page.tsx             # Home page (search & list)
├── [name]/              # Dynamic route for Pokémon detail
│   ├── page.tsx         # Detail page
components/
├── PokemonCard.tsx      # Card component for each Pokémon
├── Breadcrumb.tsx       # Breadcrumb navigation
hooks/
├── usePokemon.ts        # Custom hook to fetch and filter Pokémon
lib/
├── api.ts               # API utility functions
styles/
├── globals.css          # Global Tailwind styles
```

---

## 🌐 API Reference

Using [PokéAPI v2](https://pokeapi.co/docs/v2)

* Get all Pokémon types:
  `https://pokeapi.co/api/v2/type`

* Get all Pokémon:
  `https://pokeapi.co/api/v2/pokemon?limit=1000`

* Get Pokémon details:
  `https://pokeapi.co/api/v2/pokemon/{name}`

---

## 📱 Responsive Design

* Fully responsive for mobile, tablet, and desktop
* Built with Tailwind CSS utility classes

---

## 🧪 Testing & Deployment

You can deploy this app on:

* [StackBlitz](https://stackblitz.com/~/github.com/Praveenverma1510/pokemon-search-app)
---


