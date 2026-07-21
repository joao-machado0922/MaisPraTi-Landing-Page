import { useState } from "react";

import './Forms.css';

function FormContato({ fechar }) {

    async function salvar(e) {
        e.preventDefault();
        alert("Mensagem enviada! Obrigado pelo contato.");
        fechar();
    }

    return (
        <form className="modal_form" onSubmit={(e) => salvar(e)}>
            <h2 className="modal_titulo">Olá! Preencha os campos abaixo e mande sua mensagem</h2>
            <input type="text" placeholder="Nome" required></input>
            <input type="email" placeholder="Email" required></input>
            <textarea id=""placeholder="Mensagem" required />
            <div className="modal_botoes">
                <button id="btn-salvar" type="submit">Enviar mensagem</button>
                <button id="btn-cancelar" type="button" onClick={fechar}>Cancelar</button>
            </div>
        </form>
    )

}

export default FormContato;
