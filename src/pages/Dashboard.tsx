import React, { useState } from 'react';
import { userMeals } from '../data/userData';
import { NutrientTracker } from '../components/ui/NutrientTracker';
import { Calendar, PieChart, Clock } from 'lucide-react';
export function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const todayMeals = userMeals.filter(meal => meal.date === selectedDate);
  const totalNutrients = todayMeals.reduce((acc, meal) => {
    return {
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat
    };
  }, {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });
  return <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Nutrition Dashboard</h1>
        {/* Date Selector */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-xl font-semibold">Date</h2>
          </div>
          <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2" />
        </div>
        {/* Nutrient Summary */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <PieChart className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-xl font-semibold">Nutrient Summary</h2>
          </div>
          <NutrientTracker calories={totalNutrients.calories} protein={totalNutrients.protein} carbs={totalNutrients.carbs} fat={totalNutrients.fat} />
        </div>
        {/* Meals List */}
        <div>
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-xl font-semibold">Today's Meals</h2>
          </div>
          {todayMeals.length > 0 ? <div className="space-y-4">
              {todayMeals.map(meal => <div key={meal.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between">
                  <div>
                    <div className="text-sm font-medium text-green-600">
                      {meal.mealType}
                    </div>
                    <h3 className="font-semibold">{meal.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      {meal.calories} kcal
                    </div>
                    <div className="text-xs text-gray-500">
                      P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fat}g
                    </div>
                  </div>
                </div>)}
            </div> : <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-600">No meals recorded for this date.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Add a Meal
              </button>
            </div>}
        </div>
      </div>
    </div>;
}