import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="max-w-screen-lg w-full p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">Your Profile</h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center">
          Manage your favorite restaurants, update your preferences, and view your activity.
        </p>
      </div>
    </div>
  );
};

export default Profile;