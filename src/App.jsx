import { useEffect, useState } from "react";
import { selectCategorias, selectInstrucoes } from "./services/bancoService";

function App() {


  useEffect(() => {
    async function carregar() {
      const data = await selectInstrucoes();
      console.log(data)
    }
    carregar();
  }, []);

  return (
    <>
    <h1>Página em desenvolvimento</h1>
    </>

  );
}

export default App;