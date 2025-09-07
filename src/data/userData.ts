export interface Meal {
  id: string;
  recipeId: string;
  title: string;
  date: string;
  mealType: 'Breakfast' | 'Lunch' | 'Snacks' | 'Dinner';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}
export interface MealPlan {
  id: string;
  date: string;
  meals: {
    breakfast?: string;
    lunch?: string;
    snacks?: string;
    dinner?: string;
  };
}
export const userMeals: Meal[] = [{
  id: '1',
  recipeId: '1',
  title: 'Avocado Toast with Poached Eggs',
  date: '2023-06-01',
  mealType: 'Breakfast',
  calories: 320,
  protein: 15,
  carbs: 30,
  fat: 18
}, {
  id: '2',
  recipeId: '3',
  title: 'Quinoa Salad with Roasted Vegetables',
  date: '2023-06-01',
  mealType: 'Lunch',
  calories: 350,
  protein: 12,
  carbs: 45,
  fat: 14
}, {
  id: '3',
  recipeId: '7',
  title: 'Salmon with Roasted Asparagus',
  date: '2023-06-01',
  mealType: 'Dinner',
  calories: 480,
  protein: 32,
  carbs: 20,
  fat: 28
}, {
  id: '4',
  recipeId: '2',
  title: 'Greek Yogurt Parfait with Berries and Granola',
  date: '2023-06-02',
  mealType: 'Breakfast',
  calories: 280,
  protein: 14,
  carbs: 40,
  fat: 8
}];
export const mealPlans: MealPlan[] = [{
  id: '1',
  date: '2023-06-05',
  meals: {
    breakfast: 'Avocado Toast with Poached Eggs',
    lunch: 'Quinoa Salad with Roasted Vegetables',
    snacks: 'Hummus and Vegetable Sticks',
    dinner: 'Salmon with Roasted Asparagus'
  }
}, {
  id: '2',
  date: '2023-06-06',
  meals: {
    breakfast: 'Greek Yogurt Parfait with Berries and Granola',
    lunch: 'Grilled Chicken Wrap with Avocado',
    snacks: 'Baked Sweet Potato Chips',
    dinner: 'Vegetarian Stir-Fry with Tofu'
  }
}];