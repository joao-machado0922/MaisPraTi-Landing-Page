import { useState } from 'react';

import PencilIcon from '../../assets/imagens/pencil.svg?react';
import TrashIcon from '../../assets/imagens/trash.svg?react';
import Modal from '../Modal/Modal';
import FormDeleteCategorias from '../Forms/FormDeleteCategorias';
import FormUpdateCategorias from '../Forms/FormUpdateCategorias';

import './CategoriasCard.css';

function CategoriasCard({ categoria, atualizarCategorias }) {

    const [modalAberto, setModalAberto] = useState(false);
    const [acao, setAcao] = useState("");

    return (
        <>
            <div className="card">
                <div className="card_acoes">
                    <PencilIcon className="card_icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setAcao("editar");
                        setModalAberto(true);
                    }} title="Editar Categoria" alt="Editar" />
                    <TrashIcon className="card_icon" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setAcao("deletar");
                        setModalAberto(true);
                    }} title="Deletar Categoria" alt="Deletar" />
                </div>
                <h2 className="card_titulo">{categoria.nome}</h2>
                <div className="card_show">
                    <h3 className="card_subtitulo">{categoria.nome}</h3>
                    <hr className="card_divisoria" />
                    <p className="card_descricao">{categoria.descricao}</p>
                </div>
            </div>
            {modalAberto &&
                <Modal>
                    {acao === "editar" && <FormUpdateCategorias categoria={categoria} fechar={() => setModalAberto(false)} atualizarCategorias={atualizarCategorias} />}
                    {acao === "deletar" && <FormDeleteCategorias categoria={categoria} fechar={() => setModalAberto(false)} atualizarCategorias={atualizarCategorias} />}
                </Modal>
            }
        </>
    )
}

export default CategoriasCard;