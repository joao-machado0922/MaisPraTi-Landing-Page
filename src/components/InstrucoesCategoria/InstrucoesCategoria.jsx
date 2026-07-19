function InstrucoesCategoria({listaInstrucoes}) {
    if(listaInstrucoes.length === 0) {
        return (
            <p>Nenhuma anotação</p>
        )
    }
    return (
        <ul>
            {listaInstrucoes.map((instrucao) => (
                <li key={instrucao.id}>{instrucao.anotacao}</li>
            ))}
        </ul>
    )
}

export default InstrucoesCategoria;