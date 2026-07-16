import supabase from "./supabase";

// CATEGORIAS

export async function selectCategorias() {
    const response = await supabase.from("categorias").select("id, categoria");
    return response.data;
}

export async function insertCategorias() {

}

export async function updateCategorias() {

}

export async function deleteCategorias() {

}

// INSTRUÇÕES

export async function selectInstrucoes() {
    const response = await supabase.from("instrucoes").select("id, ordem, anotacao, categoria_id");
    return response.data;
}

export async function insertInstrucoes() {

}

export async function updateInstrucoes() {

}

export async function deleteInstrucoes() {
}