import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to Foodie Finds
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-center">
          Discover amazing restaurants near you and share your dining
          experiences.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-100">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          What is Foodie Finds?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          Foodie Finds helps you discover new restaurants, save your favorites,
          and share experiences with friends.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-gray-600">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Discover Restaurants
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Find the best spots to eat near you.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Share Experiences
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Share your favorite dining moments with friends.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Save Your Favorites
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Keep track of all the places you love.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;