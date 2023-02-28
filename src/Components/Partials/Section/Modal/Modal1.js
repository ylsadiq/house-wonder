import './Modal1.css';

function Modal1({setShowModal, children}) {
  return (
    <div className='modal1'>
      <div className="modal_backdrop" onClick={() => setShowModal(false)}></div>
      <div className="modal_dialog modal_dialog_centered">
        <div className="modal_content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal1