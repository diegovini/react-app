import { createPortal } from 'react-dom'
import './Modal.css'

export default function Modal({children, handleClose, isSalesMode}) {
  return createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: isSalesMode ? "#ff4500" : "#555",
          textAlign: "center"
        }}>
            {children}
            <button onClick={handleClose}
            className={isSalesMode ? "sales-btn" : ""}
            >Close</button>
        </div>
    </div>
  ), document.body)
}


