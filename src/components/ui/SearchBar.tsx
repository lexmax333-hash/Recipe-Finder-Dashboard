import React, { useState } from 'react';
import { Search } from 'lucide-react';
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}
export function SearchBar({
  onSearch,
  placeholder = 'Search for recipes...',
  className = ''
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };
  return <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder={placeholder} className="w-full py-3 pl-4 pr-12 text-base rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-green-600">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>;
}