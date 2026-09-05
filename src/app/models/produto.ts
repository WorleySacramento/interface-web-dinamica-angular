export interface Produto {
    imagem: string;
    nome: string;
    preco: number;
    emPromocao: boolean;
    categoria: 'Móveis' | 'Eletrônicos' | 'Roupas' | 'Alimentos' | 'Livros';
}
