import './Modal.css';

function Modal({ children }) {

    return (
        <div className="overlay">
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;