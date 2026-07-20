import { useState } from "react";

import { updateInstrucoes } from "../../services/bancoService";

import './Forms.css';

function FormUpdateInstrucoes({ anotacaoParam, fechar, atualizarInstrucoes }) {

    const [anotacao, setAnotacao] = useState(anotacaoParam.anotacao);

    async function salvar(e) {
        e.preventDefault();

        try {
            await updateInstrucoes(anotacao, anotacaoParam.id);
            await atualizarInstrucoes();

            setAnotacao("");
            fechar();
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar anotação");
        }
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <h2 className="modal_titulo">Editar Anotação</h2>
            <input type="text" placeholder="Anotação" value={anotacao} onChange={(e) => setAnotacao(e.target.value)} required />
            <div className="modal_botoes">
                <button id="btn-salvar" type="submit">Editar</button>
                <button id="btn-cancelar" type="button" onClick={fechar}>Cancelar</button>
            </div>
        </form>
    )

}

export default FormUpdateInstrucoes;