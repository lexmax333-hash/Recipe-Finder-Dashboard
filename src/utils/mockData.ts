import { Recipe } from '../components/ui/RecipeCard';
export const recipes: Recipe[] = [{
  id: '1',
  title: 'Avocado Toast with Poached Egg',
  image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Breakfast',
  prepTime: '15 min',
  calories: 320,
  servings: 1
}, {
  id: '2',
  title: 'Greek Yogurt Parfait',
  image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Breakfast',
  prepTime: '10 min',
  calories: 250,
  servings: 1
}, {
  id: '3',
  title: 'Chicken Caesar Salad',
  image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Lunch',
  prepTime: '20 min',
  calories: 380,
  servings: 2
}, {
  id: '4',
  title: 'Turkey and Avocado Wrap',
  image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Lunch',
  prepTime: '15 min',
  calories: 420,
  servings: 1
}, {
  id: '5',
  title: 'Hummus and Veggie Sticks',
  image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Snacks',
  prepTime: '5 min',
  calories: 180,
  servings: 2
}, {
  id: '6',
  title: 'Trail Mix Energy Bites',
  image: 'https://images.unsplash.com/photo-1604497183114-1b7e8d577979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Snacks',
  prepTime: '25 min',
  calories: 210,
  servings: 8
}, {
  id: '7',
  title: 'Grilled Salmon with Asparagus',
  image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Dinner',
  prepTime: '30 min',
  calories: 450,
  servings: 2
}, {
  id: '8',
  title: 'Vegetable Stir Fry with Tofu',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  category: 'Dinner',
  prepTime: '25 min',
  calories: 380,
  servings: 3
}];
export const categories = [{
  title: 'Breakfast',
  image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  count: 24
}, {
  title: 'Lunch',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  count: 36
}, {
  title: 'Snacks',
  image: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  count: 18
}, {
  title: 'Dinner',
  image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  count: 42
}];
export const mealTracking = [{
  date: '2023-10-01',
  meals: [{
    id: '1',
    type: 'Breakfast',
    calories: 320,
    protein: 15,
    carbs: 28,
    fat: 18
  }, {
    id: '3',
    type: 'Lunch',
    calories: 380,
    protein: 25,
    carbs: 20,
    fat: 12
  }, {
    id: '5',
    type: 'Snack',
    calories: 180,
    protein: 5,
    carbs: 15,
    fat: 10
  }, {
    id: '7',
    type: 'Dinner',
    calories: 450,
    protein: 32,
    carbs: 25,
    fat: 22
  }]
}, {
  date: '2023-10-02',
  meals: [{
    id: '2',
    type: 'Breakfast',
    calories: 250,
    protein: 12,
    carbs: 32,
    fat: 8
  }, {
    id: '4',
    type: 'Lunch',
    calories: 420,
    protein: 28,
    carbs: 35,
    fat: 15
  }, {
    id: '6',
    type: 'Snack',
    calories: 210,
    protein: 8,
    carbs: 22,
    fat: 12
  }, {
    id: '8',
    type: 'Dinner',
    calories: 380,
    protein: 20,
    carbs: 30,
    fat: 16
  }]
}];
export const mealPlan = [{
  day: 'Monday',
  meals: [{
    id: '1',
    type: 'Breakfast'
  }, {
    id: '3',
    type: 'Lunch'
  }, {
    id: '5',
    type: 'Snack'
  }, {
    id: '7',
    type: 'Dinner'
  }]
}, {
  day: 'Tuesday',
  meals: [{
    id: '2',
    type: 'Breakfast'
  }, {
    id: '4',
    type: 'Lunch'
  }, {
    id: '6',
    type: 'Snack'
  }, {
    id: '8',
    type: 'Dinner'
  }]
}, {
  day: 'Wednesday',
  meals: [{
    id: '1',
    type: 'Breakfast'
  }, {
    id: '4',
    type: 'Lunch'
  }, {
    id: '5',
    type: 'Snack'
  }, {
    id: '8',
    type: 'Dinner'
  }]
}, {
  day: 'Thursday',
  meals: [{
    id: '2',
    type: 'Breakfast'
  }, {
    id: '3',
    type: 'Lunch'
  }, {
    id: '6',
    type: 'Snack'
  }, {
    id: '7',
    type: 'Dinner'
  }]
}, {
  day: 'Friday',
  meals: [{
    id: '1',
    type: 'Breakfast'
  }, {
    id: '3',
    type: 'Lunch'
  }, {
    id: '6',
    type: 'Snack'
  }, {
    id: '8',
    type: 'Dinner'
  }]
}, {
  day: 'Saturday',
  meals: [{
    id: '2',
    type: 'Breakfast'
  }, {
    id: '4',
    type: 'Lunch'
  }, {
    id: '5',
    type: 'Snack'
  }, {
    id: '7',
    type: 'Dinner'
  }]
}, {
  day: 'Sunday',
  meals: [{
    id: '1',
    type: 'Breakfast'
  }, {
    id: '4',
    type: 'Lunch'
  }, {
    id: '6',
    type: 'Snack'
  }, {
    id: '7',
    type: 'Dinner'
  }]
}];