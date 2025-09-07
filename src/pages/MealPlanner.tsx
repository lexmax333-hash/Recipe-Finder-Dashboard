import React, { useState } from 'react';
import { mealPlans } from '../data/userData';
import { recipes } from '../data/recipes';
import { RecipeCard } from '../components/ui/RecipeCard';
import { Calendar, List, Plus } from 'lucide-react';
export function MealPlanner() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  // In a real app, this would filter based on the selected date
  const suggestedRecipes = recipes.slice(0, 4);
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Meal Planner</h1>
      {/* Date Selector */}
      <div className="max-w-xs mb-8">
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-gray-500 mr-2" />
          <h2 className="text-xl font-semibold">Select Date</h2>
        </div>
        <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
      </div>
      {/* Meal Plan for Selected Date */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <List className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-xl font-semibold">Your Meal Plan</h2>
          </div>
          <button className="flex items-center text-sm text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700 transition-colors">
            <Plus className="h-4 w-4 mr-1" /> Add Meal
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
            {/* Breakfast */}
            <div className="p-4">
              <h3 className="font-medium text-green-600 mb-2">Breakfast</h3>
              <div className="min-h-[100px] flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                <button className="text-gray-500 flex items-center text-sm">
                  <Plus className="h-4 w-4 mr-1" /> Add Breakfast
                </button>
              </div>
            </div>
            {/* Lunch */}
            <div className="p-4">
              <h3 className="font-medium text-green-600 mb-2">Lunch</h3>
              <div className="min-h-[100px] flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                <button className="text-gray-500 flex items-center text-sm">
                  <Plus className="h-4 w-4 mr-1" /> Add Lunch
                </button>
              </div>
            </div>
            {/* Snacks */}
            <div className="p-4">
              <h3 className="font-medium text-green-600 mb-2">Snacks</h3>
              <div className="min-h-[100px] flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                <button className="text-gray-500 flex items-center text-sm">
                  <Plus className="h-4 w-4 mr-1" /> Add Snack
                </button>
              </div>
            </div>
            {/* Dinner */}
            <div className="p-4">
              <h3 className="font-medium text-green-600 mb-2">Dinner</h3>
              <div className="min-h-[100px] flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                <button className="text-gray-500 flex items-center text-sm">
                  <Plus className="h-4 w-4 mr-1" /> Add Dinner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Suggested Recipes */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Suggested Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </div>
    </div>;
}