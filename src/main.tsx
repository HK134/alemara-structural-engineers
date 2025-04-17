
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "@/components/ui/sonner"
import { AuthProvider } from '@/contexts/AuthContext'

// Create the root and render the app without the Lovable badge
createRoot(document.getElementById("root")!).render(
  <>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </>
);
