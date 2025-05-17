import {Post, User, Comment} from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  getPosts: async (): Promise<Post[]> => {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  },

  getPost: async (id: number): Promise<Post> => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    if (!response.ok) throw new Error('Failed to fetch post');
    return response.json();
  },

  getUser: async (id: number): Promise<User> => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },

  getUsers: async (): Promise<User[]> => {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  getComments: async (postId: number): Promise<Comment[]> => {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
  },
};

export {type Post, type User, type Comment};
