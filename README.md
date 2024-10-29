# AI Quiz Generator
A simple application to generate quizzes using AI.

---

### Prerequisites
1. **Node.js**: Download and install from [Node.js](https://nodejs.org/en/download/prebuilt-installer).
2. **NPX**: Install using:
   ```bash
   npm install -g npx
   ```

### Project Setup

1. **Install Dependencies**: In your terminal, run:
   ```bash
   npm install
   ```

2. **Setup Tailwind CSS**:
   - Install Tailwind and related dependencies:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Initialize Tailwind:
     ```bash
     npx tailwindcss init -p
     ```
   - Update `tailwind.config.js` with paths to your template files:
     ```javascript
     /** @type {import('tailwindcss').Config} */
     export default {
       content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

3. **Additional Libraries**:
   - Install `react-markdown` for rendering markdown content:
     ```bash
     npm install react-markdown
     ```
   - Install `axios` for handling API requests:
     ```bash
     npm install axios
     ```

### Running the Project
Run the development server with:
```bash
npm run dev
```

---

Adding a brief **Features** or **Usage** section, and a **License** (if needed), can also be helpful. Let me know if you'd like to add any of these!
