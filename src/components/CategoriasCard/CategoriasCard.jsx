import { useState } from 'react';

import PencilIcon from '../../assets/pencil.svg?react';
import TrashIcon from '../../assets/trash.svg?react';
import Modal from '../Modal/Modal';
import FormDeleteCategorias from '../Forms/FormDeleteCategorias';
import FormUpdateCategorias from '../Forms/FormUpdateCategorias';

import './CategoriasCard.css';

function CategoriasCard({ categoria, atualizarCategorias }) {

    const [modalUpdateAberto, setModalUpdateAberto] = useState(false);
    const [modalDeleteAberto, setModalDeleteAberto] = useState(false);

    return (
        <>
            <div className="card">
                <div className="card_acoes">
                    <PencilIcon className="card_icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setModalUpdateAberto(true)
                    }} title="Editar Categoria" alt="Editar" />
                    <TrashIcon className="card_icon" onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setModalDeleteAberto(true)
                    }} title="Deletar Categoria" alt="Deletar" />
                </div>
                <h2 className="card_titulo">{categoria.nome}</h2>
                <hr className="card_divisoria" />
                <p className="card_descricao">{categoria.descricao}</p>
            </div>
            {modalDeleteAberto && <Modal>
                <FormDeleteCategorias categoria={categoria} fechar={() => setModalDeleteAberto(false)} atualizarCategorias={atualizarCategorias} />
            </Modal>}
            {modalUpdateAberto && <Modal>
                <FormUpdateCategorias categoria={categoria} fechar={() => setModalUpdateAberto(false)} atualizarCategorias={atualizarCategorias} />
            </Modal>}
        </>
    )
}

export default CategoriasCard;