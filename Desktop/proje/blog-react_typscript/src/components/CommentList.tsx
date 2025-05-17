import React from 'react';
import {Comment} from '../services/api';
import CommentCard from './CommentCard';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({comments}) => {
  return (
    <div className="px-8 py-6 bg-sky-50 border-t border-sky-100">
      <h2 className="text-xl font-semibold text-sky-800 mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
