import supabase from "./supabase";

// CATEGORIAS

export async function selectCategorias() {
    const response = await supabase.from("categorias").select("id, descricao, slug");
    return response.data;
}

export async function selectCategoriaBySlug(slug) {
    const response = await supabase.from("categorias").select("id, descricao, slug").eq("slug", slug).single();
    return response.data;
}

export async function insertCategorias(novaCategoria) {
    await supabase.from("categorias").insert({descricao: novaCategoria});
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

export async function selectInstrucoesByCategoria(categoriaId) {
    const response = await supabase.from("instrucoes").select("id, ordem, anotacao, categoria_id").eq("categoria_id", categoriaId).order("ordem");
    return response.data;
}

export async function insertInstrucoes() {

}

export async function updateInstrucoes() {

}

export async function deleteInstrucoes() {
}