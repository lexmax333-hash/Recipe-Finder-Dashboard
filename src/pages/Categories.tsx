import React from 'react';
import { categories } from '../data/recipes';
import { CategoryCard } from '../components/ui/CategoryCard';
export function Categories() {
  return <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Recipe Categories
        </h1>
        <p className="text-gray-600">
          Browse our recipe collection by category to find the perfect meal for
          any time of day.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => <CategoryCard key={category.slug} title={category.title} image={category.image} count={category.count} slug={category.slug} />)}
      </div>
    </div>;
}