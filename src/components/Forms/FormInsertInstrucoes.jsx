import { useState } from "react";

import { insertInstrucoes } from "../../services/bancoService";

import './Forms.css';
import './FormInsertInstrucoes.css';

function FormInsertInstrucoes({ atualizarInstrucoes, categoria }) {

    const [anotacao, setAnotacao] = useState("");

    async function salvar(e) {
        e.preventDefault();

        try {
            await insertInstrucoes(anotacao, categoria.id);
            await atualizarInstrucoes();
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar anotação");
        }
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <input type="text" placeholder="Nova anotação" value={anotacao} onChange={(e) => setAnotacao(e.target.value)} required />
                <button id="btn-salvar" type="submit">Cadastrar</button>
        </form>
    )

}

export default FormInsertInstrucoes;