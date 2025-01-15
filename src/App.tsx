import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/FoodieFinds-DiscoverRestaurants" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;