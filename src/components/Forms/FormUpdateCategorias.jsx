import { useState } from "react";

import { updateCategorias } from "../../services/bancoService";

import './Forms.css';

function FormUpdateCategorias({ categoria, fechar, atualizarCategorias }) {

    const [nome, setNome] = useState(categoria.nome ?? "");
    const [descricao, setDescricao] = useState(categoria.descricao ?? "");

    async function salvar(e) {
        e.preventDefault();

        try {
            await updateCategorias(categoria.id, nome, descricao);
            await atualizarCategorias();

            setNome("");
            setDescricao("");
            fechar();
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar categoria");
        }
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <h2 className="modal_titulo">Editar Categoria</h2>
            <input type="text" autoFocus placeholder="Nome da categoria" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="text" placeholder="Descrição da Categoria" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            <div className="modal_botoes">
                <button id="btn-salvar" type="submit">Editar</button>
                <button id="btn-cancelar" type="button" onClick={fechar}>Cancelar</button>
            </div>
        </form>
    )

}

export default FormUpdateCategorias;