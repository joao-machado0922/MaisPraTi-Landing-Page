import { useState } from 'react';
import './InsertCategorias.css';
import Modal from './Modal';

function InsertCategorias() {

    const [modalAberto, setModalAberto] = useState(false);

    return <>
        <button className='insert--btn' onClick={() => setModalAberto(true)}>+</button>

        {modalAberto && (
            <Modal fechar={() => setModalAberto(false)} />
        )}
    </>
}

export default InsertCategorias