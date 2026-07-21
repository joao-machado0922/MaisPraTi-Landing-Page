import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InstrucoesCategoria from '../../components/InstrucoesCategoria/InstrucoesCategoria';

import ArrowLeft from "../../assets/imagens/arrow-left.svg?react";

import { selectCategoriaBySlug, selectInstrucoesByCategoria } from '../../services/bancoService';

import './Categoria.css';

function Categoria() {
    const { categoria } = useParams();

    const navigate = useNavigate();

    const [categoriaSlug, setCategoriaSlug] = useState(null);
    const [listaInstrucoes, setListaInstrucoes] = useState([]);
    const [carregando, setCarregando] = useState(true);

    async function carregarInstrucoes() {
        const data = await selectInstrucoesByCategoria(categoriaSlug.id);
        setListaInstrucoes(data);
    }

    useEffect(() => {
        async function buscarInstrucoes() {
            try {
                const categoriaResponse = await selectCategoriaBySlug(categoria);
                setCategoriaSlug(categoriaResponse);
                const instrucoesResponse = await selectInstrucoesByCategoria(categoriaResponse.id);
                setListaInstrucoes(instrucoesResponse);
            } catch (error) {
                console.log(error)
            } finally {
                setCarregando(false);
            }
        }

        buscarInstrucoes();
    }, [categoria]);

    if (carregando) {
        return (
            <>
                <Header />

                <main className="categoria_container">
                    <h2 className="categoria_titulo">Carregando...</h2>
                </main>

                <Footer />
            </>
        )
    }

    if (!categoriaSlug) {
        return (
            <>
                <Header />

                <main className="categoria_container">
                    <ArrowLeft onClick={() => navigate("/")} className="categoria_voltar" />
                    <h2 className="categoria_titulo">Categoria Inexistente</h2>
                </main>

                <Footer />
            </>)
    }

    console.log(listaInstrucoes);

    return (
        <>
            <Header />

            <main className="categoria_container">
                <div className="categoria_voltar" onClick={() => navigate("/")}>
                    <ArrowLeft  />Voltar
                </div>
                <h2 className="categoria_titulo">{categoriaSlug.nome}</h2>
                <InstrucoesCategoria listaInstrucoes={listaInstrucoes} atualizarAnotacoes={carregarInstrucoes} categoria={categoriaSlug} />
            </main>

            <Footer />
        </>
    )
}

export default Categoria;