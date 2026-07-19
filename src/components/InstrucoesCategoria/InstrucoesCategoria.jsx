import { useState } from "react";
import FormInsertInstrucoes from "../Forms/FormInsertInstrucoes";
import Modal from "../Modal/Modal.jsx"
import PencilIcon from '../../assets/pencil.svg?react';
import TrashIcon from '../../assets/trash.svg?react';
import FormUpdateInstrucoes from "../Forms/FormUpdateInstrucoes.jsx";
import FormDeleteInstrucoes from "../Forms/FormDeleteInstrucoes.jsx";

function InstrucoesCategoria({ listaInstrucoes, atualizarAnotacoes, categoria }) {

    const [acao, setAcao] = useState("");
    const [modalAberto, setModalAberto] = useState(false);
    const [anotacaoSelecionada, setAnotacaoSelecionada] = useState();

    if (listaInstrucoes.length === 0) {
        return (
            <>
                <p>Nenhuma anotação</p>
                <button className="btn-insert" onClick={() => {
                    setAcao("inserir")
                    setModalAberto(true)
                }}>Inserir</button>
                {modalAberto &&
                    <Modal>
                        <FormInsertInstrucoes fechar={() => setModalAberto(false)} atualizarInstrucoes={atualizarAnotacoes} categoria={categoria} />
                    </Modal>}
            </>
        )
    }
    return (
        <>
            <ul className="instrucoes_view">
                {listaInstrucoes.map((instrucao) => (
                    <li key={instrucao.id}>
                        {instrucao.anotacao}<PencilIcon className="card_icon" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setAnotacaoSelecionada(instrucao);
                            setAcao("atualizar");
                            setModalAberto(true);
                        }} title="Editar Categoria" alt="Editar" />
                        <TrashIcon className="card_icon" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setAnotacaoSelecionada(instrucao);
                            setAcao("deletar");
                            setModalAberto(true);
                        }} title="Deletar Categoria" alt="Deletar" /></li>
                ))}
            </ul>
            <button className="btn-insert" onClick={() => {
                setAcao("inserir")
                setModalAberto(true)
            }}>Inserir</button>
            {modalAberto &&
                <Modal>
                    {acao === "inserir" && <FormInsertInstrucoes fechar={() => setModalAberto(false)} atualizarInstrucoes={atualizarAnotacoes} categoria={categoria} />}
                    {acao === "atualizar" && <FormUpdateInstrucoes anotacaoParam={anotacaoSelecionada} fechar={() => setModalAberto(false)} atualizarInstrucoes={atualizarAnotacoes} />}
                    {acao === "deletar" && <FormDeleteInstrucoes anotacao={anotacaoSelecionada} fechar={() => setModalAberto(false)} atualizarInstrucoes={atualizarAnotacoes} />}
                </Modal>
            }
        </>
    )

}

export default InstrucoesCategoria;