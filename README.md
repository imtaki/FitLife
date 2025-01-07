# 🏋️ FitLife - Supplement Store

FitLife is a modern e-commerce web application for fitness supplements. With an intuitive UI, dark mode toggle, and seamless email integration, it provides an exceptional user experience for fitness enthusiasts.

## 🚀 Features

- **Dynamic Cart Functionality**: Add, update, and remove items with real-time updates.
- **EmailJS Integration**:  Seamlessly send emails directly from the application.
- **Dark Mode Switch**: Toggle between light and dark modes with persistent settings.
- **Responsive Design**: Built for all screen sizes using Tailwind CSS.
- **Modern UI/UX**: Clean and user-friendly interface.
- **State Management**: Efficient state handling with Vue's Options API and Pinia.

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3, TypeScript, Vite
- **Styling**: TailWindCSS
- **Email**: EmailJS
- **Dark Mode**: @vueuse/core's useDark utility
- **State Management**: Pinia

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imtaki/FitLife.git
   ```

2. Navigate to the project folder:
   ```bash
   cd FitLife
   ```

3. Install dependencies:
   ```bash
   npm i 
   ```
## Running the Application

1. Navigate to the root folder (`FitLife`).
2. Start the site using:
   ```bash
   npm run dev
   ```
3. Open your browser and visit `http://localhost:5173` to view the application.

## 📂 Folder Structure

```plaintext
FitLife/
├── src/               # Source code
│   ├── assets/        # Static assets
│   ├── components/    # Vue components
│   ├── pages/         # Page views
│   ├── stores/        # Pinia stores
│   ├── types/         # TypeScript Types
│   ├── views/         # Vue Views
│   ├── App.vue        # Main App component
│   └── main.ts        # Entry point
├── public/            # Public assets
├── vite.config.ts     # Vite configuration
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Scripts:
  - `npm run dev`: Starts the  development server.
  - `npm run build`: Builds the production-ready app.
  - `npm run preview`: Preview the production build..

---

Enjoy browsing supplements with **FitLife**! 💪
