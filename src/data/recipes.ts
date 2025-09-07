import { Recipe } from '../components/ui/RecipeCard';
export const recipes: Recipe[] = [{
  id: '1',
  title: 'Avocado Toast with Poached Eggs',
  category: 'Breakfast',
  prepTime: 15,
  image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 320,
  servings: 2
}, {
  id: '2',
  title: 'Greek Yogurt Parfait with Berries and Granola',
  category: 'Breakfast',
  prepTime: 10,
  image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 280,
  servings: 1
}, {
  id: '3',
  title: 'Quinoa Salad with Roasted Vegetables',
  category: 'Lunch',
  prepTime: 30,
  image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 350,
  servings: 4
}, {
  id: '4',
  title: 'Grilled Chicken Wrap with Avocado',
  category: 'Lunch',
  prepTime: 20,
  image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 420,
  servings: 2
}, {
  id: '5',
  title: 'Hummus and Vegetable Sticks',
  category: 'Snacks',
  prepTime: 10,
  image: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 180,
  servings: 2
}, {
  id: '6',
  title: 'Baked Sweet Potato Chips',
  category: 'Snacks',
  prepTime: 25,
  image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 150,
  servings: 3
}, {
  id: '7',
  title: 'Salmon with Roasted Asparagus',
  category: 'Dinner',
  prepTime: 35,
  image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 480,
  servings: 2
}, {
  id: '8',
  title: 'Vegetarian Stir-Fry with Tofu',
  category: 'Dinner',
  prepTime: 30,
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  calories: 320,
  servings: 4
}];
export const categories = [{
  title: 'Breakfast',
  slug: 'breakfast',
  image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  count: recipes.filter(recipe => recipe.category === 'Breakfast').length
}, {
  title: 'Lunch',
  slug: 'lunch',
  image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  count: recipes.filter(recipe => recipe.category === 'Lunch').length
}, {
  title: 'Snacks',
  slug: 'snacks',
  image: 'https://images.unsplash.com/photo-1616501268209-edfff098fdd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  count: recipes.filter(recipe => recipe.category === 'Snacks').length
}, {
  title: 'Dinner',
  slug: 'dinner',
  image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  count: recipes.filter(recipe => recipe.category === 'Dinner').length
}];