import { FormEvent, forwardRef, useImperativeHandle, useRef } from "react";
import { Post } from "../utils/types";

const PostForm = forwardRef((handleSubmit: (e: FormEvent) => void, ref, editForm: null | Post = null) => {
  const titleRef = useRef<HTMLInputElement>(null); 
  const descRef = useRef<HTMLTextAreaElement>(null); 
  useImperativeHandle(ref, () => ({
    getTitleValue: () => {
        return titleRef?.current?.value;
    },
    getDescValue: () => {
        return descRef?.current?.value;
    }    
  }))

  return (
    <form className="posts-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={titleRef}
        defaultValue={editForm ? editForm.title : ""}
        className="posts-input posts-title-input"
        type="text"
        placeholder="Enter post title"
        required
      />
      <textarea
        ref={descRef}
        defaultValue={editForm ? editForm.desc : ""}
        className="posts-input posts-desc-input"
        placeholder="Enter post description..."
        required
      ></textarea>
      <button className="posts-form-btn">Add new post</button>
    </form>
  );
});


export default PostForm;