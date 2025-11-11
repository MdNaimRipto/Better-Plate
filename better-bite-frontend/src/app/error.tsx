"use client";
import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center gap-4">
      <h3 className="text-2xl font-semibold text-red-600">
        Something went wrong
      </h3>
      <p className="text-sm text-gray-600">
        {error.message || "An unexpected error occurred."}
      </p>

      {error.digest && (
        <p className="text-xs text-primary">Error ID: {error.digest}</p>
      )}
      <button
        onClick={() => reset()}
        className="text-primary hover:text-secondary text-xs md:text-sm font-semibold border border-primary hover:border-secondary rounded-lg py-3 px-6 transition duration-500"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
