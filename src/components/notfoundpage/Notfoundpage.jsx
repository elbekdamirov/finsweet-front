import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-[#1C1E53] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#1C1E53] mb-2">
        Page Not Found
      </h2>
      <p className="text-[#1C1E53] opacity-70 mb-8">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="py-3 px-6 bg-[#1C1E53] text-white rounded-full hover:bg-[#1f2230] transition"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
