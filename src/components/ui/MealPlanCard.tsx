import React from 'react';
import { MealPlan } from '../data/userData';
interface MealPlanCardProps {
  plan: MealPlan;
  isActive?: boolean;
  onClick?: () => void;
}
export function MealPlanCard({
  plan,
  isActive = false,
  onClick
}: MealPlanCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };
  return <div className={`bg-white rounded-lg shadow-md p-4 border-2 transition-colors cursor-pointer
        ${isActive ? 'border-green-600' : 'border-transparent hover:border-green-200'}`} onClick={onClick}>
      <div className="font-semibold mb-2">{formatDate(plan.date)}</div>
      <div className="space-y-2">
        {plan.meals.breakfast && <div>
            <span className="text-xs font-medium text-green-600">
              Breakfast
            </span>
            <p className="text-sm">{plan.meals.breakfast}</p>
          </div>}
        {plan.meals.lunch && <div>
            <span className="text-xs font-medium text-green-600">Lunch</span>
            <p className="text-sm">{plan.meals.lunch}</p>
          </div>}
        {plan.meals.snacks && <div>
            <span className="text-xs font-medium text-green-600">Snacks</span>
            <p className="text-sm">{plan.meals.snacks}</p>
          </div>}
        {plan.meals.dinner && <div>
            <span className="text-xs font-medium text-green-600">Dinner</span>
            <p className="text-sm">{plan.meals.dinner}</p>
          </div>}
      </div>
    </div>;
}