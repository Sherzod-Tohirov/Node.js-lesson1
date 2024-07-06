import { useState } from "react";
import { Post } from "../utils/types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import EditModal from "./EditModal";
export default function PostCard({ post }: { post: Post }) {
  const [editModal, setEditModal] = useState(false);
  return (
    <>
      <li className="post-card">
        <div className="post-actions">
          <button
            className="post-action-btn"
            onClick={() => setEditModal(true)}
          >
            <MdEdit color="inherit" size="inherit" />
          </button>
          <button className="post-action-btn delete-btn">
            <MdDelete color="inherit" size="inherit" />
          </button>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-desc">{post.desc}</p>
        <EditModal open={editModal} setOpen={setEditModal} />
      </li>
    </>
  );
}
