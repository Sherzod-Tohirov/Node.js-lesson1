import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Post } from "../utils/types";
import PostCard from "./PostCard";
import Loading from "./Loading";

interface newPost {
  title: string;
  desc: string;
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const titleRef = useRef<HTMLFormElement | null>(null);
  const descRef = useRef<HTMLFormElement | null>(null);
  const handlePostSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (titleRef.current && descRef.current) {
      const newPost: newPost = {
        title: titleRef.current.value,
        desc: descRef.current.value,
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
            toast.success("New post is added successfully", {
              autoClose: 3000,
              position: "bottom-right",
              theme: "dark",
            });
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
  return (
    <>
      <h1 className="posts-title">Posts</h1>
      <form className="posts-form" onSubmit={handlePostSubmit}>
        <input
          ref={titleRef}
          className="posts-input posts-title-input"
          type="text"
          placeholder="Enter post title"
          required
        />
        <textarea
          ref={descRef}
          className="posts-input posts-desc-input"
          placeholder="Enter post description..."
          required
        ></textarea>
        <button className="posts-form-btn">Add new post</button>
      </form>
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
