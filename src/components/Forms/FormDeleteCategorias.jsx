import { useState } from "react";

import { deleteCategorias } from "../../services/bancoService";

import './Forms.css';

function FormDeleteCategorias({ categoria, fechar, atualizarCategorias }) {

    async function salvar(e) {
        e.preventDefault();

        try {
            await deleteCategorias(categoria.id);
            await atualizarCategorias();
            fechar();
        } catch (error) {
            console.error(error);
            alert("Erro ao deletar categoria");
        }
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <h2 className="modal_titulo">Deseja excluir essa categoria?</h2>
            <div className="modal_botoes">
                <button id="btn-salvar" type="submit">Sim</button>
                <button id="btn-cancelar" type="button" onClick={fechar}>Não</button>
            </div>
        </form>
    )

}

export default FormDeleteCategorias;