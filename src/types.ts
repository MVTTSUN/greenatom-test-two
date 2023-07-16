type Post = {
  title: string;
  content: string;
};

type PostWithId = Post & {
  id: string;
};

type AuthData = {
  email: string;
  password: string;
};

export type { Post, PostWithId, AuthData };
