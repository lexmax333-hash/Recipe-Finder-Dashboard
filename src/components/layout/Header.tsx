import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Categories',
    href: '/categories'
  }, {
    name: 'Dashboard',
    href: '/dashboard'
  }, {
    name: 'Meal Planner',
    href: '/meal-planner'
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-green-600">
              RecipeFinder
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-base font-medium ${location.pathname === item.href ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600'}`}>
                {item.name}
              </Link>)}
          </nav>
          {/* Mobile menu button */}
          <button type="button" className="md:hidden p-2 rounded-md text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-3 space-y-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.href ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
          </div>}
      </div>
    </header>;
}