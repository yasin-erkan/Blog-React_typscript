import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {api, Post, User, Comment} from '../services/api';

interface PostCardProps {
  post: Post;
  author: User | undefined;
}

const PostCard: React.FC<PostCardProps> = ({post, author}) => {
  const {data: comments} = useQuery<Comment[]>({
    queryKey: ['comments', post.id],
    queryFn: () => api.getComments(post.id),
    enabled: false, // ! here, we don't fetch comments by default
  });

  return (
    <Link to={`/post/${post.id}`} className="group block">
      <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-sky-100">
        <div className="p-6 flex-grow">
          <h2 className="text-xl font-bold text-sky-800 mb-3 group-hover:text-sky-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
        </div>
        {author && (
          <div className="px-6 py-4 bg-sky-50 border-t border-sky-100">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold text-sm">
                {author.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-sky-800">
                  {author.name}
                </p>
                <p className="text-xs text-sky-600">{author.email}</p>
              </div>
            </div>
          </div>
        )}
        {comments && (
          <div className="px-6 py-3 bg-sky-50 border-t border-sky-100">
            <p className="text-sm text-sky-600">
              {comments.length} comment{comments.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </article>
    </Link>
  );
};

export default PostCard;
