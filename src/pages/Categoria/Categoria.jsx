import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from "../../components/Header/Header";
import InstrucoesCategoria from '../../components/InstrucoesCategoria/InstrucoesCategoria';

import { selectCategoriaBySlug, selectInstrucoesByCategoria } from '../../services/bancoService';

import './Categoria.css';

function Categoria() {
    const { categoria } = useParams();

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
                <p>Carregando</p>
            </>
        )
    }

    if (!categoriaSlug) {
        return (
            <>
                <Header />
                <h1>Categoria Inexistente</h1>
            </>)
    }

    console.log(listaInstrucoes);

    return (
        <>
            <Header />
            <h1>{categoriaSlug.nome}</h1>
            <InstrucoesCategoria listaInstrucoes={listaInstrucoes} atualizarAnotacoes={carregarInstrucoes} categoria={categoriaSlug} />
        </>
    )
}

export default Categoria;