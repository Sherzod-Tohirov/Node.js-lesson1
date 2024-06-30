import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

interface Post {
  id: number;
  title: string;
  desc: string;
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const response = fetch("http://localhost:8000/api/posts");
    response
      .then((res) => res.json())
      .then((data) => {
        if (data.length) setPosts(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <h1 className="posts-title">Posts</h1>
      <ul className="post-list">
        {posts.length
          ? posts.map((post: Post) => (
              <li className="post-card" key={post.id}>
                <h1 className="post-title">{post.title}</h1>
                <p className="post-desc">{post.desc}</p>
              </li>
            ))
          : <div className="loader-box"><ReactLoading type="balls" color="white" width={120} height={120} /></div>}
      </ul>
    </>
  );
}
