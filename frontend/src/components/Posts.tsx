import { FormEvent, useCallback, useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Post } from "../utils/types";
import PostCard from "./PostCard";
import Loading from "./Loading";
import PostForm from "./PostForm";
import { PostsContext } from "../context/PostsContext";

interface newPost {
  title: string;
  desc: string;
}

export default function Posts() {
  const {posts, setPosts} = useContext(PostsContext);
  const postFormInputRef = useRef<HTMLFormElement | null>(null);
  const handlePostSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (postFormInputRef.current) {
      const newPost: newPost = {
        title: postFormInputRef.current.getTitleValue(),
        desc: postFormInputRef.current.getDescValue(),
      };
      console.log(newPost);

      const response = fetch("http://localhost:8000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      response
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            setPosts(res.data);
            e?.target?.reset();
            toast.success("New post is added successfully");
          }
        })
        .catch((err) => console.error(err));
    }
  }, []);
  useEffect(() => {
    const response = fetch("http://localhost:8000/api/posts");
    response
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res?.status === 200) {
          setPosts(res.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  console.log("Posts:", posts);
  return (
    <>
      <h1 className="posts-title">Posts</h1>
      <PostForm handleSubmit = {handlePostSubmit} ref = {postFormInputRef} editForm={undefined} width="normal" />
      <ul className="post-list">
        {posts?.length ? (
          posts.map((post: Post) => <PostCard key={post.id} post={post} />)
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}
