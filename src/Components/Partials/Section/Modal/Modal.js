import { RiCloseLine } from 'react-icons/ri'
import './Modal.css';

function Modal({ modalHeading, handleClose, children, extraClass }) {
  return (
    <div className={`modal ${extraClass}`}>
      <div className="modal_backdrop" onClick={handleClose}></div>
      <div className="modal_dialog modal_dialog_centered">
        <div className="modal_content">
          <button type='button' className='modal_close' onClick={handleClose}><RiCloseLine /></button>
          {modalHeading &&
            <h1 className="modal_heading">{modalHeading}</h1>
          }
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal