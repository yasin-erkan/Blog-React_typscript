import React from 'react';
import {Post, User} from '../services/api';

interface PostHeaderProps {
  post: Post;
  author: User | null;
}

const PostHeader: React.FC<PostHeaderProps> = ({post, author}) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-sky-800 mb-4">{post.title}</h1>
      {author && (
        <div className="flex items-center mb-6">
          <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold text-lg">
            {author.name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-sky-800">{author.name}</p>
            <p className="text-xs text-sky-600">{author.email}</p>
          </div>
        </div>
      )}
      <div className="prose prose-sky max-w-none">
        <p className="text-gray-600 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
};

export default PostHeader;
