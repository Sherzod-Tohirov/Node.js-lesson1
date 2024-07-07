import { FormEvent, forwardRef, useImperativeHandle, useRef } from "react";
import { Post } from "../utils/types";

const PostForm = forwardRef((props: {handleSubmit: (e: FormEvent) => void, editForm: undefined | Post, width: 'full' | 'wider' | 'normal'}, ref) => {
  const {handleSubmit, editForm, width} = props;
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
    <form className={`posts-form ${width}`} onSubmit={handleSubmit}>
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
      {!editForm ? <button className="posts-form-btn">Add new post</button> : ""}
    </form>
  );
});


export default PostForm;