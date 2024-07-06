import { Post } from "../utils/types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export default function PostCard({ post }: { post: Post }) {
  return (
    <li className="post-card">
      <div className="post-actions">
        <button className="post-action-btn">
             <MdEdit color="inherit" size="inherit" />
        </button>
        <button className="post-action-btn delete-btn">
            <MdDelete color="inherit" size="inherit" />
        </button>
      </div>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-desc">{post.desc}</p>
    </li>
  );
}
