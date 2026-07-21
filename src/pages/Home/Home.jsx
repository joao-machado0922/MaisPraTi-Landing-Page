import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import CategoriasCard from "../../components/CategoriasCard/CategoriasCard";
import FormInsertCategorias from "../../components/Forms/FormInsertCategorias";
import Modal from "../../components/Modal/Modal";

import { selectCategorias } from "../../services/bancoService";

import './Home.css';
import Footer from "../../components/Footer/Footer";

function Home() {

    const [modalAberto, setModalAberto] = useState(false);

    const [listaCategorias, setListaCategorias] = useState([]);
    const navigate = useNavigate();

    async function carregarCategorias() {
        const data = await selectCategorias();
        setListaCategorias(data);
    }

    useEffect(() => {
        carregarCategorias();
    }, []);

    return (
        <>
            <Header />

            <main>
                <h2 className="pagina_subtitulo">Manual de informações</h2>
                <div className="card_view">
                    {listaCategorias.map((categoria) => (
                        <div key={categoria.id} onClick={() => navigate(`/categoria/${categoria.slug}`)}>
                            <CategoriasCard categoria={categoria} fechar={() => setModalAberto(false)} atualizarCategorias={carregarCategorias} />
                        </div>
                    ))}
                </div>
                <button className='insert--btn' onClick={() => setModalAberto(true)}>+</button>
                {modalAberto && (
                    <Modal fechar={() => setModalAberto(false)}>
                        <FormInsertCategorias fechar={() => setModalAberto(false)} atualizarCategorias={carregarCategorias} />
                    </Modal>
                )}
            </main>

            <Footer />
        </>

    );
}

export default Home;