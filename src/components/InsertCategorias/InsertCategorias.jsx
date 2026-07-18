import { useState } from 'react';
import './InsertCategorias.css';
import Modal from './Modal';

function InsertCategorias({ atualizarCategorias }) {

    const [modalAberto, setModalAberto] = useState(false);

    return <>
        <button className='insert--btn' onClick={() => setModalAberto(true)}>+</button>

        {modalAberto && (
            <Modal atualizarCategorias={atualizarCategorias} fechar={() => setModalAberto(false)} />
        )}
    </>
}

export default InsertCategorias