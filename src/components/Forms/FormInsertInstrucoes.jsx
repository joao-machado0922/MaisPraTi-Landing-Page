import { useState } from "react";

import { insertInstrucoes } from "../../services/bancoService";

import './Forms.css';

function FormInsertInstrucoes({ fechar, atualizarInstrucoes, categoria }) {

    const [anotacao, setAnotacao] = useState("");

    async function salvar(e) {
        e.preventDefault();

        try {
            await insertInstrucoes(anotacao, categoria.id);
            await atualizarInstrucoes();

            setAnotacao("");
            fechar();
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar anotação");
        }
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <h2 className="modal_titulo">Cadastrar Nova Anotação</h2>
            <input type="text" autoFocus placeholder="Nova anotação" value={anotacao} onChange={(e) => setAnotacao(e.target.value)} required />
            <div className="modal_botoes">
                <button id="btn-salvar" type="submit">Cadastrar</button>
                <button id="btn-cancelar" type="button" onClick={fechar}>Cancelar</button>
            </div>
        </form>
    )

}

export default FormInsertInstrucoes;