import './CategoriasCard.css';

function CategoriasCard({categoria}) {
    return (
        <div className="card">
            <h2 className="card_titulo">{categoria.descricao}</h2>
        </div>
    )
}

export default CategoriasCard;