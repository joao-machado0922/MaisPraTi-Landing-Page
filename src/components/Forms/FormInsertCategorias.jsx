import { useState } from "react";

import { insertCategorias } from "../../services/bancoService";

import './Forms.css';

function FormInsertCategorias({ fechar, atualizarCategorias }) {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    async function salvar(e) {
        e.preventDefault();

        try {
            await insertCategorias(nome, descricao);
            await atualizarCategorias();

            setNome("");
            setDescricao("");
            fechar();
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar categoria");
        }
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <h2 className="modal_titulo">Cadastrar Nova Categoria</h2>
            <input type="text" autoFocus placeholder="Nome da categoria" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="text" placeholder="Descrição da Categoria" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            <div className="modal_botoes">
                <button id="btn-salvar" type="submit">Cadastrar</button>
                <button id="btn-cancelar" type="button" onClick={fechar}>Cancelar</button>
            </div>
        </form>
    )

}

export default FormInsertCategorias;