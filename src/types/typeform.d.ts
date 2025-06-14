
declare global {
  interface Window {
    tf?: {
      load: () => void;
    };
  }
}

export {};
