import { FormEvent, useCallback, useContext, useRef } from "react";
import Modal from "./Modal";
import PostForm from "./PostForm";
import { Post } from "../utils/types";
import { PostsContext } from "../context/PostsContext";
import { toast } from "react-toastify";

export default function EditModal({open, setOpen, post }: {open: boolean; setOpen: (x: boolean) => void; post: Post}) {
    const {setPosts} = useContext(PostsContext);
    const editFormInputRef = useRef(null);
    const handlePostEdit = useCallback((e: FormEvent) => {
        e.preventDefault();
        fetch(`http://localhost:8000/api/posts/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                title: editFormInputRef?.current?.getTitleValue(), 
                desc: editFormInputRef?.current?.getDescValue(), 
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log("Res: ", res);
            if(res.status === 200) {
                console.log("Response: ", res);
                setPosts(res.data);
                toast.success("Post is edited successfully !");
            }
        })
        .catch(err => {
            console.error(err);
            toast.error("Something went wrong !");
        })
    }, []);
    return (<>
      <Modal open={open} title="Edit post" onClose={() => setOpen(false)} onSubmit={handlePostEdit}>
          <PostForm handleSubmit={handlePostEdit} ref={editFormInputRef} editForm={post} width="full" />
      </Modal>
     </>)
}