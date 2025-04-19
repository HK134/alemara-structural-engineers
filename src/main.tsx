
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "sonner"

// Create the root and render the app without the Lovable badge
createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
