import * as bancoDev from "./bancoServiceDev.js";
import * as bancoProd from "./bancoServiceProd.js";

const banco =
    import.meta.env.VITE_DATABASE_MODE === "prod"
        ? bancoProd
        : bancoDev;

export const {
    selectCategorias,
    selectCategoriaBySlug,
    insertCategorias,
    updateCategorias,
    deleteCategorias,
    selectInstrucoes,
    selectInstrucoesByCategoria,
    insertInstrucoes,
    updateInstrucoes,
    deleteInstrucoes
} = banco;