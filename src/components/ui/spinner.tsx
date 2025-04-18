
import React from "react";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
};

export const Spinner = ({ size = "md" }: SpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-current border-t-transparent text-primary`}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
