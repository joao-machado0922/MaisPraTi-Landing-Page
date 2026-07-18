import Header from "../../components/Header/Header";
import CategoriasCard from "../../components/CategoriasCard/CategoriasCard";
import InsertCategorias from "../../components/InsertCategorias/InsertCategorias";

import { useEffect, useState } from "react";
import { selectCategorias, selectInstrucoes } from "../../services/bancoService";

import './Home.css';

function Home() {

    const [listaCategorias, setListaCategorias] = useState([]);

    useEffect(() => {
        async function carregar() {
            const data = await selectCategorias();
            setListaCategorias(data);
        }
        carregar();
    }, []);

    return (
        <>
            <Header />
            <div className="cardView">
                {listaCategorias.map((categoria) => (
                    <CategoriasCard key={categoria.id} categoria={categoria} />
                ))}
            </div>
            <InsertCategorias />
        </>

    );
}

export default Home;