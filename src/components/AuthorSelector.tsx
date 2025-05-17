import React from 'react';
import {User} from '../services/api';

interface AuthorSelectorProps {
  users: {[key: number]: User};
  selectedAuthor: number | null;
  onAuthorSelect: (authorId: number | null) => void;
}

const AuthorSelector: React.FC<AuthorSelectorProps> = ({
  users,
  selectedAuthor,
  onAuthorSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <div
        onClick={() => onAuthorSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
          selectedAuthor === null
            ? 'bg-sky-600 text-white'
            : 'bg-white text-sky-600 hover:bg-sky-50 border border-sky-200'
        }`}>
        All Authors
      </div>
      {Object.values(users).map(user => (
        <div
          key={user.id}
          onClick={() => onAuthorSelect(user.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
            selectedAuthor === user.id
              ? 'bg-sky-600 text-white'
              : 'bg-white text-sky-600 hover:bg-sky-50 border border-sky-200'
          }`}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default AuthorSelector;
