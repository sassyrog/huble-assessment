# Huble Full Stack React Assessment

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sassyrog/huble-assessment.git
   cd huble-assessment
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open the app:**
   Visit http://localhost:5173 in the browser.

## Overview

I built a small, responsive React application using Vite and TailwindCSS, following Atomic Design principles. It grabs user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and shows it in a grid, complete with search, sorting, and a detail view. I also utilized AI to help with architecture design, component creation, and generating user bios. I plucked out some project elements and tools from previous React + Vite projects I've worked on before to speed up development. Because of time constraints, I did not setup the project with Typescript, but I would normally do so in a production app. Traditionally, I would also include unit tests, but I prioritized core features and AI integration for this assessment.

### Features I included

- Fetch and display user data (name, email, company)
- Search users by name
- Sort by name or company
- Responsive card grid layout
- Sidebar detail view (HubSpot-style)
- AI-generated bios for each user
- Accessibility features (keyboard navigation, ARIA labels)

## Folder Structure

```
src/
 ├─ components/
 │   ├─ atoms/
 │   ├─ molecules/
 │   ├─ organisms/
 │   └─ templates/
 ├─ hooks/
 ├─ pages/
 └─ App.jsx
...//vite project files
```

## AI Usage

I used AI to thoughtfully accelerate architecture design, generate reusable components, and create human-like randommized bios.

### Tools Used

- **ChatGPT (GPT-5)** for brainstorming, project structure, rapid prototyping, and copywriting (i.e bios, cleaning up README)

### Here are some example prompts I used:

1. **Architecture Design:**
   - Generate a clean atomic design structure for a React + Vite + Tailwind app that fetches users and supports search filtering. (from chat.openai.com)
2. **Component Creation:**
   - Create a reusable React card component using TailwindCSS that displays user info (name, email, company) and is responsive. (from vscode github copilot)
3. **AI-Generated Bios:**
   - Generate 10 short, friendly bios for fictional users based on their name and company. each bio must have a name and company placeholder e.g $1 for name and $2 for company. To make it more human-like, some bios should not include the company name and in some bios, the company name should appear at random positions of sentence construction within the bio. (from chat.openai.com)
4. **Addistional considerations and improvements:**
   - Suggest some improvements to make a React user listing app more accessible, visually appealing and user-friendly. (from chat.openai.com, Pagination and concatenation of bios were suggested by GPT and then I implemented them)

### Reflection

AI accelerated the setup and prototyping phases significantly, allowing me to focus more on refining the user experience and implementing advanced features. However, I ensured to review and adapt all AI-generated code to fit the project requirements and maintain code quality. Manual work was crucial for:

- Integrating API data and state management
- Writing responsive Tailwind utility classes
- Debugging, testing, and refining interactions

## Extra Credit Items Implemented

- Sorting by name/company
- Sidebar detail view (HubSpot-style)
- AI-generated bios
- Accessibility features (keyboard navigation, ARIA labels)
- Clean Atomic Design architecture

P.S: To navigate with keyboard, click on a user card to open the sidebar, then press 'Tab' or 'Shift + Tab' to cycle through the sidebar elements, then 'Enter' to select User.

## Future Improvements

- Pagination or infinite scroll
- Close sidebar with 'Escape' key
- Debounce search input
- Dark mode toggle
- Real-time AI bio generation via OpenAI API
- Unit tests (Jest + React Testing Library)
- Improved animations (Framer Motion)

---

**Author:** Roger  
**Date:** October 2025  
**Frameworks:** React, Vite, TailwindCSS
