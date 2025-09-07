import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/ui/SearchBar';
import { RecipeCard } from '../components/ui/RecipeCard';
import { recipes, categories } from '../data/recipes';
import { ArrowRight } from 'lucide-react';
export function Home() {
  const [searchResults, setSearchResults] = useState<typeof recipes>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const handleSearch = (query: string) => {
    const results = recipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
    setHasSearched(true);
  };
  const featuredRecipes = recipes.slice(0, 4);
  return <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Delicious food" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Delicious <span className="text-green-400">Recipes</span> for
            Every Meal
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            Discover thousands of recipes, track your nutrition, and plan your
            meals all in one place.
          </p>
          <div className="max-w-xl">
            <SearchBar onSearch={handleSearch} className="mb-4" />
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {categories.map(category => <Link key={category.slug} to={`/categories/${category.slug}`} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                {category.title}
              </Link>)}
          </div>
        </div>
      </div>

      {/* Search Results */}
      {hasSearched && <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Search Results</h2>
          {searchResults.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </div> : <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No recipes found. Try a different search term.
              </p>
            </div>}
        </div>}

      {/* Featured Recipes */}
      {!hasSearched && <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Recipes</h2>
            <Link to="/categories" className="text-green-600 hover:text-green-700 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </div>}

      {/* Categories Section */}
      {!hasSearched && <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Browse Categories</h2>
              <Link to="/categories" className="text-green-600 hover:text-green-700 flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(category => <Link key={category.slug} to={`/categories/${category.slug}`} className="relative overflow-hidden rounded-lg shadow-md h-48 group">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-bold">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {category.count} recipes
                    </p>
                  </div>
                </Link>)}
            </div>
          </div>
        </div>}
    </div>;
}