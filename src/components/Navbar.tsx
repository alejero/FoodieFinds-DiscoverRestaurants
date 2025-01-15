import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';

const Navbar: React.FC = () => {
  const activeClass = "text-primary font-semibold underline";
  const defaultClass = "text-gray-600 hover:text-primary transition-colors";

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 z-10">
      <h1 className="text-primary text-2xl font-bold">Foodie Finds</h1>
      <div className="flex space-x-4">
        <NavLink to="/" className={({ isActive }: { isActive: boolean }) => (isActive ? activeClass : defaultClass)}>Home</NavLink>
        <NavLink to="/discover" className={({ isActive }: { isActive: boolean }) => (isActive ? activeClass : defaultClass)}>Discover</NavLink>
        <NavLink to="/profile" className={({ isActive }: { isActive: boolean }) => (isActive ? activeClass : defaultClass)}>Profile</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;