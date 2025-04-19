
import { toast as sonnerToast } from "sonner";

// Create a compatibility layer for our app
export const toast = sonnerToast;

// Export a dummy useToast function to maintain compatibility with existing code
export const useToast = () => {
  return {
    toast: sonnerToast,
    // Return an empty array for the toasts property to maintain compatibility with shadcn/ui toast
    toasts: []
  };
};
