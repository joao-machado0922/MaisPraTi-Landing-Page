import './Modal.css';

function Modal({ children, fechar }) {

    return (
        <div className="overlay" onClick={(e) => {
            e.stopPropagation()
            fechar()
        }}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;