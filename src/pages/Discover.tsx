import React, { useState } from "react";
import mockRestaurants from "../api/mockRestaurants";
import RestaurantCard from "../components/RestaurantCard";

const Discover: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredRestaurants = mockRestaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
          Discover Restaurants
        </h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
