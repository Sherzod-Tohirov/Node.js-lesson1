import { FormEvent, useCallback } from "react";
import Modal from "./Modal";

export default function EditModal({open, setOpen}: {open: boolean; setOpen: (x: boolean) => void}) {
    const handlePostEdit = useCallback((e: FormEvent) => {
        e.preventDefault();
    }, []);
    return (<>
      
      <Modal open={open} title="Edit post" onClose={() => setOpen(false)} onSubmit={handlePostEdit}>
          <form>
             
          </form>
      </Modal>
     
     </>)
}