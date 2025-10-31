import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Root element not found. Cannot mount React app.");
  }

  console.log("Mounting React app to root element");
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Error mounting React app:", error);
  
  // Display error on page if mounting fails
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif;">
        <h1 style="color: red;">Application Error</h1>
        <p><strong>Error:</strong> ${error instanceof Error ? error.message : String(error)}</p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">
          ${error instanceof Error ? error.stack : String(error)}
        </pre>
        <p>Check the browser console for more details.</p>
      </div>
    `;
  }
}
