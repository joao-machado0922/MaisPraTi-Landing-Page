import supabase from "./supabase";

function getSlug(texto) {
    return texto.toLowerCase().replace(" ", "-");
}

// CATEGORIAS

export async function selectCategorias() {
    const response = await supabase.from("categorias").select("id, nome, descricao, slug").order('id');
    return response.data;
}

export async function selectCategoriaBySlug(slug) {
    const response = await supabase.from("categorias").select("id, nome, descricao, slug").eq("slug", slug).single();
    return response.data;
}

export async function insertCategorias(nome, descricao) {
    await supabase.from("categorias").insert({nome: nome, descricao: descricao, slug: getSlug(nome)});
}

export async function updateCategorias(id, nome, descricao) {
    const response = await supabase.from("categorias").update({nome: nome, descricao: descricao, slug: getSlug(nome)}).eq("id", id);
    return response.data;
}

export async function deleteCategorias(id) {
    await supabase.from("categorias").delete().eq("id", id);
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