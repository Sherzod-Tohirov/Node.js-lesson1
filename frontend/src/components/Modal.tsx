import { useEffect, useRef } from "react";
import { ModalType } from "../utils/types";
import { IoClose } from "react-icons/io5";
import { IoEnterOutline } from "react-icons/io5";
export default function Modal({title, children, open, onClose, onSubmit}: ModalType) {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
        if(modalRef.current) {
            open ? modalRef.current.showModal() : modalRef.current.close();
        }
    }, [open]);
    return (
        <>
           <dialog className="modal" id="modal" ref={modalRef}>
              <div className="modal-wrapper">
                  <div className="modal-header">
                   <h3 className="modal-title">{title}</h3>
                   <button className="modal-close-btn" onClick={onClose}>
                       <IoClose />
                   </button>
                  </div>
                  <div className="modal-body">
                    {children}
                  </div>
                  <div className="modal-footer">
                     <button onClick={onClose} className="modal-action-btn cancel-btn">Cancel</button>
                     <button onClick={(e) => {onSubmit(e); onClose();} } className="modal-action-btn save-btn">Save <IoEnterOutline size={25} color="inherit" /></button>
                  </div>
              </div>
           </dialog>
        </>
    )
}