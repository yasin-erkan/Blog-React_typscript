import React from 'react';
import {Comment} from '../services/api';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({comment}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-sky-100">
      <div className="flex items-center mb-2">
        <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold text-sm">
          {comment.email.charAt(0).toUpperCase()}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-sky-800">{comment.name}</p>
          <p className="text-xs text-sky-600">{comment.email}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{comment.body}</p>
    </div>
  );
};

export default CommentCard;
