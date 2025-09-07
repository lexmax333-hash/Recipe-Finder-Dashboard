import React from 'react';
interface NutrientTrackerProps {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  calorieGoal?: number;
  proteinGoal?: number;
  carbsGoal?: number;
  fatGoal?: number;
}
export function NutrientTracker({
  calories,
  protein,
  carbs,
  fat,
  calorieGoal = 2000,
  proteinGoal = 100,
  carbsGoal = 250,
  fatGoal = 70
}: NutrientTrackerProps) {
  const calculatePercentage = (value: number, goal: number) => {
    const percentage = value / goal * 100;
    return Math.min(percentage, 100); // Cap at 100%
  };
  const caloriePercentage = calculatePercentage(calories, calorieGoal);
  const proteinPercentage = calculatePercentage(protein, proteinGoal);
  const carbsPercentage = calculatePercentage(carbs, carbsGoal);
  const fatPercentage = calculatePercentage(fat, fatGoal);
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Nutrient Tracker</h3>
      <div className="space-y-4">
        {/* Calories */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Calories</span>
            <span className="text-sm text-gray-600">
              {calories} / {calorieGoal} kcal
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{
            width: `${caloriePercentage}%`
          }}></div>
          </div>
        </div>
        {/* Protein */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Protein</span>
            <span className="text-sm text-gray-600">
              {protein} / {proteinGoal} g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{
            width: `${proteinPercentage}%`
          }}></div>
          </div>
        </div>
        {/* Carbs */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Carbs</span>
            <span className="text-sm text-gray-600">
              {carbs} / {carbsGoal} g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{
            width: `${carbsPercentage}%`
          }}></div>
          </div>
        </div>
        {/* Fat */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Fat</span>
            <span className="text-sm text-gray-600">
              {fat} / {fatGoal} g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{
            width: `${fatPercentage}%`
          }}></div>
          </div>
        </div>
      </div>
    </div>;
}