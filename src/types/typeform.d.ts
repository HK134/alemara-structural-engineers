
declare global {
  interface Window {
    tf?: {
      load: () => void;
      refresh: () => void;
    };
  }
}

export {};
