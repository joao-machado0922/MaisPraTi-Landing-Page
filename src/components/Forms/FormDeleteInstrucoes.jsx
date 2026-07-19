import { useState } from "react";

import { deleteInstrucoes } from "../../services/bancoService";

import './Forms.css';

function FormDeleteInstrucoes({ anotacao, fechar, atualizarInstrucoes }) {

    async function salvar(e) {
        e.preventDefault();

        try {
            await deleteInstrucoes(anotacao.id);
            await atualizarInstrucoes();
            fechar();
        } catch (error) {
            console.error(error);
            alert("Erro ao deletar anotação");
        }
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <h2 className="modal_titulo">Deseja excluir essa anotação?</h2>
            <div className="modal_botoes">
                <button id="btn-salvar" type="submit">Sim</button>
                <button id="btn-cancelar" type="button" onClick={fechar}>Não</button>
            </div>
        </form>
    )

}

export default FormDeleteInstrucoes;