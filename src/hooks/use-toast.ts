
import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  description?: string;
  variant?: "default" | "destructive";
  duration?: number;
  [key: string]: any;
};

// Create a compatibility layer for our app
export const toast = (messageOrTitle: string, options?: ToastOptions) => {
  if (options?.variant === "destructive") {
    return sonnerToast.error(messageOrTitle, { 
      description: options?.description, 
      duration: options?.duration
    });
  }
  
  return sonnerToast(messageOrTitle, { 
    description: options?.description, 
    duration: options?.duration
  });
};

// Export a dummy useToast function to maintain compatibility with existing code
export const useToast = () => {
  return {
    toast,
    // Return an empty array for the toasts property to maintain compatibility with shadcn/ui toast
    toasts: []
  };
};
