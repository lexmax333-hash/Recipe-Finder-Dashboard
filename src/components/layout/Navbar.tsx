import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <ChefHat className="text-primary" />
          <span>RecipeFinder</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/categories" className="font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link to="/dashboard" className="font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/meal-planner" className="font-medium hover:text-primary transition-colors">
            Meal Planner
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 z-50">
          <div className="flex flex-col py-4 px-6">
            <Link to="/" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/categories" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/dashboard" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
            <Link to="/meal-planner" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Meal Planner
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;