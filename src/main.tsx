
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "@/components/ui/sonner"
import { HelmetProvider } from 'react-helmet-async'

// Create the root and render the app without the Lovable badge
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    <Toaster />
  </HelmetProvider>
);
