import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {api, Post, User, Comment} from '../services/api';
import Loading from '../components/Loading';
import Error from '../components/Error';
import BackHome from '../components/BackHome';

const PostDetail: React.FC = () => {
  const {id} = useParams<{id: string}>();

  const {
    data: post,
    isLoading: postLoading,
    error: postError,
  } = useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => api.getPost(Number(id)),
  });

  const {
    data: author,
    isLoading: authorLoading,
    error: authorError,
  } = useQuery<User>({
    queryKey: ['user', post?.userId],
    queryFn: () => api.getUser(post!.userId),
    enabled: !!post,
  });

  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError,
  } = useQuery<Comment[]>({
    queryKey: ['comments', id],
    queryFn: () => api.getComments(Number(id)),
  });

  if (postLoading || authorLoading || commentsLoading) return <Loading />;
  if (postError || !post) return <Error message="Failed to fetch post" />;
  if (authorError)
    return <Error message="Failed to fetch author information" />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackHome />

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-sky-800 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 text-lg mb-8">{post.body}</p>

            {author && (
              <div className="flex items-center mb-8 p-4 bg-sky-50 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold text-lg">
                  {author.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-sky-800">
                    {author.name}
                  </p>
                  <p className="text-sky-600">{author.email}</p>
                </div>
              </div>
            )}

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-sky-800 mb-6">
                Comments ({comments?.length || 0})
              </h2>
              {commentsError ? (
                <div className="text-red-600">
                  Failed to load comments. Please try again later.
                </div>
              ) : comments?.length === 0 ? (
                <div className="text-sky-600">No comments yet.</div>
              ) : (
                <div className="space-y-6">
                  {comments?.map(comment => (
                    <div
                      key={comment.id}
                      className="p-6 bg-sky-50 rounded-lg border border-sky-100">
                      <div className="flex items-center mb-4">
                        <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold text-sm">
                          {comment.email.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-sky-800">
                            {comment.name}
                          </p>
                          <p className="text-xs text-sky-600">
                            {comment.email}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600">{comment.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostDetail;
