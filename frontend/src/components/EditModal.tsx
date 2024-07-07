import { FormEvent, useCallback, useRef } from "react";
import Modal from "./Modal";
import PostForm from "./PostForm";
import { Post } from "../utils/types";

export default function EditModal({open, setOpen, post}: {open: boolean; setOpen: (x: boolean) => void; post: Post}) {
    const editFormInputRef = useRef(null);
    const handlePostEdit = useCallback((e: FormEvent) => {
        e.preventDefault();
    }, []);
    return (<>
      
      <Modal open={open} title="Edit post" onClose={() => setOpen(false)} onSubmit={handlePostEdit}>
          <PostForm handleSubmit={handlePostEdit} ref={editFormInputRef} editForm={post} width="full" />
      </Modal>
     
     </>)
}