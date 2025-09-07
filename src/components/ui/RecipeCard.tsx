import React from 'react';
import { Clock, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
export interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: number;
  image: string;
  calories: number;
  servings: number;
}
interface RecipeCardProps {
  recipe: Recipe;
}
export function RecipeCard({
  recipe
}: RecipeCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium text-green-600">
          {recipe.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {recipe.title}
        </h3>
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.prepTime} mins</span>
          </div>
          <div className="flex items-center">
            <Utensils className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            {recipe.calories} calories/serving
          </span>
          <Link to={`/recipe/${recipe.id}`} className="text-green-600 hover:text-green-700 text-sm font-medium">
            View Recipe
          </Link>
        </div>
      </div>
    </div>;
}