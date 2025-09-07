import React from 'react';
import { Link } from 'react-router-dom';
interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  slug: string;
}
export function CategoryCard({
  title,
  image,
  count,
  slug
}: CategoryCardProps) {
  return <Link to={`/categories/${slug}`} className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-md h-48">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white/80 text-sm">{count} recipes</p>
        </div>
      </div>
    </Link>;
}