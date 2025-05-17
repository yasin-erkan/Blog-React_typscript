import React from 'react';
import {FaSearch} from 'react-icons/fa';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({value, onChange}) => {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="Search health articles..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-3 pl-12 pr-4 border border-sky-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-gray-700 shadow-sm transition-all duration-200"
      />
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
         <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
