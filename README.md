# ERPSense-Dashboard

An intelligent ERP dashboard built with React, featuring an AI chat assistant for enterprise resource planning insights.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sid-zm/ERPSense-Dashboard.git
   cd ERPSense-Dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   This installs all packages listed in `package.json`, including:
   - **react** - UI framework
   - **react-dom** - React DOM renderer
   - **lucide-react** - Icon library
   - **react-scripts** - Build tooling (Create React App)

## Running the App

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

- **`src/App.js`** - Main application file containing the entire dashboard UI and AI chat assistant logic
- `src/index.js` - Entry point that renders App.js
- `src/index.css` - Global styles
- `package.json` - Project dependencies and scripts

## Dependencies

See `requirements.txt` for a flat list of all required packages.
