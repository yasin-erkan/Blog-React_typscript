export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
