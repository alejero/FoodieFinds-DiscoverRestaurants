import React from 'react';

interface RestaurantProps {
  restaurant: {
    id: number;
    name: string;
    address: string;
    image: string;
    rating: number;
  };
}

const RestaurantCard: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{restaurant.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{restaurant.address}</p>
        <div className="flex items-center space-x-1 text-yellow-500">
          <span className="font-medium">{restaurant.rating}</span>
          <span>⭐</span>
        </div>
        <button className="mt-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;