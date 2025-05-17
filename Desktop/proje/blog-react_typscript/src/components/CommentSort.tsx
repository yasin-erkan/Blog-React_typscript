import React from 'react';

type SortOption = 'default' | 'alphabetical' | 'length';

interface CommentSortProps {
  onSort: (option: SortOption) => void;
  currentSort: SortOption;
}

const CommentSort: React.FC<CommentSortProps> = ({onSort, currentSort}) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <span className="text-gray-300">Sort by:</span>
      <select
        value={currentSort}
        onChange={e => onSort(e.target.value as SortOption)}
        className="bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="default">Default</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="length">Length</option>
      </select>
    </div>
  );
};

export default CommentSort;
