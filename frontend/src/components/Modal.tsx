import { ModalType } from "../utils/types";
import { IoClose } from "react-icons/io5";
export default function Modal({title, children, onClose, onSubmit}: ModalType) {
    return (
        <>
           <dialog className="modal" id="modal">
              <div className="modal-wrapper">
                  <div className="modal-header">
                   <h3 className="modal-title">{title}</h3>
                   <button className="modal-close-btn">
                       <IoClose />
                   </button>
                  </div>
                  <div className="modal-body">
                    {children}
                  </div>
                  <div className="modal-footer">
                     <button onClick={onClose} className="modal-action-btn">Cancel</button>
                     <button onClick={onSubmit} className="modal-action-btn delete-btn">Save</button>
                  </div>
              </div>
           </dialog>

        </>
    )
}