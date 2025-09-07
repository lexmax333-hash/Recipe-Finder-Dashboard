import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes, categories } from '../data/recipes';
import { RecipeCard } from '../components/ui/RecipeCard';
export function CategoryDetail() {
  const {
    category
  } = useParams<{
    category: string;
  }>();
  const categoryInfo = categories.find(c => c.slug === category);
  const categoryRecipes = recipes.filter(recipe => recipe.category.toLowerCase() === (categoryInfo?.title.toLowerCase() || ''));
  if (!categoryInfo) {
    return <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
      </div>;
  }
  return <div className="container mx-auto px-4 py-12">
      <div className="relative h-64 rounded-lg overflow-hidden mb-8">
        <img src={categoryInfo.image} alt={categoryInfo.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {categoryInfo.title} Recipes
          </h1>
          <p className="text-white/80">{categoryInfo.count} recipes</p>
        </div>
      </div>
      {categoryRecipes.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div> : <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            No recipes found in this category.
          </p>
        </div>}
    </div>;
}