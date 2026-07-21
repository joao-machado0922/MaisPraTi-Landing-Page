import { useState } from "react";
import FormInsertInstrucoes from "../Forms/FormInsertInstrucoes";
import Modal from "../Modal/Modal.jsx"
import PencilIcon from '../../assets/imagens/pencil.svg?react';
import TrashIcon from '../../assets/imagens/trash.svg?react';
import FormUpdateInstrucoes from "../Forms/FormUpdateInstrucoes.jsx";
import FormDeleteInstrucoes from "../Forms/FormDeleteInstrucoes.jsx";

import './InstrucoesCategoria.css';

function InstrucoesCategoria({ listaInstrucoes, atualizarAnotacoes, categoria }) {

    const [acao, setAcao] = useState("");
    const [modalAberto, setModalAberto] = useState(false);
    const [anotacaoSelecionada, setAnotacaoSelecionada] = useState();

    if (listaInstrucoes.length === 0) {
        return (
            <>
                <div className="anotacoes_input">
                    <FormInsertInstrucoes atualizarInstrucoes={atualizarAnotacoes} categoria={categoria} />
                </div>
                <p className="nenhuma_anotacao">Nenhuma anotação</p>
            </>
        )
    }
    return (
        <>
            <div className="anotacoes_input">
                <FormInsertInstrucoes atualizarInstrucoes={atualizarAnotacoes} categoria={categoria} />
            </div>
            <table className="instrucoes_view">
                <tbody>
                    {listaInstrucoes.map((instrucao) => (
                        <tr key={instrucao.id}>
                            <td className="anotacao_data">{instrucao.anotacao}</td>
                            <td className="pencil_data">
                                <PencilIcon className="card_icon" onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setAnotacaoSelecionada(instrucao);
                                    setAcao("atualizar");
                                    setModalAberto(true);
                                }} title="Editar Categoria" alt="Editar" />
                            </td>
                            <td className="trash_data">
                                <TrashIcon className="card_icon" onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setAnotacaoSelecionada(instrucao);
                                    setAcao("deletar");
                                    setModalAberto(true);
                                }} title="Deletar Categoria" alt="Deletar" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modalAberto &&
                <Modal fechar={() => setModalAberto(false)}>
                    {acao === "atualizar" && <FormUpdateInstrucoes anotacaoParam={anotacaoSelecionada} fechar={() => setModalAberto(false)} atualizarInstrucoes={atualizarAnotacoes} />}
                    {acao === "deletar" && <FormDeleteInstrucoes anotacao={anotacaoSelecionada} fechar={() => setModalAberto(false)} atualizarInstrucoes={atualizarAnotacoes} />}
                </Modal>
            }
        </>
    )

}

export default InstrucoesCategoria;