function InstrucoesCategoria({listaInstrucoes}) {
    console.log(listaInstrucoes)
    return (
        <ul>
            {listaInstrucoes.map((instrucao) => (
                <li key={instrucao.id}>{instrucao.anotacao}</li>
            ))}
        </ul>
    )
}

export default InstrucoesCategoria;