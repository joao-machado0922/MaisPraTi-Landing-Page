import { useState } from "react";
import { insertCategorias } from "../../services/bancoService";
import './Modal.css';

function Modal({ fechar }) {
    const [novaCategoria, setNovaCategoria] = useState("");

    async function salvar(e) {
        e.preventDefault();

        try {
            await insertCategorias(novaCategoria);
        } catch(error) {
            alert("Erro ao cadastrar categoria!");
        }

        setNovaCategoria("");
        fechar();
    }

    return (
        <div className="overlay" onClick={fechar}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <form className="modal_form" onSubmit={(e) => salvar(e)}>
                    <h2 className="modal_titulo">Cadastrar Nova Categoria</h2>
                    <input type="text" autoFocus placeholder="Nome da categoria" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} required/>
                    <div className="modal_botoes">
                        <button id="btn-salvar" type="submit">Cadastrar</button>
                        <button id="btn-cancelar" type="button" onClick={fechar}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;