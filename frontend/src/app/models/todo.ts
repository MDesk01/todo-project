//interface 
export interface Todo{
    id?: String,                 //? indica que é opcional
    titulo: String,
    descricao?: String,
    dataParaFinalizar: any,
    finalizado: Boolean
}