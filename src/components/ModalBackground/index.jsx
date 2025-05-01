import { createPortal } from 'react-dom';
import './styleModal.scss';
import Octagon from '../ButtonCenter';
import { CgClose } from "react-icons/cg";
export default function ModalBackground({
  onClose,
  children,
  modalTitle,
  modalSubTitle,
  className
}) {

  return createPortal(
    <div className={`modal-overlay ${className ? className : ''}`} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
      >
      <Octagon
        className="modal-window"
        isDark
        isModal
      >
        <div className="modal-content">
          <div>
            <p className="modal-title">{modalTitle}</p>
            <button className="modal-close" onClick={onClose}>
              <CgClose color='#8C8B92' />
            </button>
          </div>
          <p className="modal-subtitle">{modalSubTitle}</p>
          <div className="modal-body">{children}</div>
        </div>
      </Octagon>
      </div>
    </div>,
    document.body
  );
}
