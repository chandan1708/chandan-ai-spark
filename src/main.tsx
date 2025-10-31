import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Cannot mount React app.");
}

console.log("Mounting React app to root element");
createRoot(rootElement).render(<App />);
