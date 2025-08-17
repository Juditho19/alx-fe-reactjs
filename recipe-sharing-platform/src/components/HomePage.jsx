// src/components/HomePage.jsx
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Simmer
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover, cook, and share your favourite recipes with ease.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Browse</h2>
          <p className="text-gray-600">
            Explore thousands of recipes tailored to your taste.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cook</h2>
          <p className="text-gray-600">
            Follow step-by-step instructions to cook with confidence.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Share</h2>
          <p className="text-gray-600">
            Upload your own recipes and inspire the community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
