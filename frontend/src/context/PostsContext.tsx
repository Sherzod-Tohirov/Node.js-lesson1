import { createContext, ReactNode, useState } from "react";
import { Post, PostContextStateType } from "../utils/types";

export const PostsContext = createContext<PostContextStateType | null>(null);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
