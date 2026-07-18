import Header from "../../components/Header/Header";
import CategoriasCard from "../../components/CategoriasCard/CategoriasCard";
import InsertCategorias from "../../components/InsertCategorias/InsertCategorias";

import { useEffect, useState } from "react";
import { selectCategorias, selectInstrucoes } from "../../services/bancoService";

import './Home.css';
import { Link } from "react-router-dom";

function Home() {

    const [listaCategorias, setListaCategorias] = useState([]);

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
            <div className="cardView">
                {listaCategorias.map((categoria) => (
                    <Link key={categoria.id} to={`/categoria/${categoria.slug}`}>
                        <CategoriasCard categoria={categoria} />
                    </Link>
                ))}
            </div>
            <InsertCategorias atualizarCategorias={carregarCategorias} />
        </>

    );
}

export default Home;