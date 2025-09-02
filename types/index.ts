export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal?: number;
  imagem: string;
  categoria: string;
  tamanhos: string[];
  cores: string[];
  estoque: number;
  destaque: boolean;
  avaliacoes: Avaliacao[];
}

export interface Avaliacao {
  id: string;
  usuario: string;
  nota: number;
  comentario: string;
  data: Date;
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
  tamanho: string;
  cor: string;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  endereco: Endereco;
  telefone: string;
}

export interface Endereco {
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface Pedido {
  id: string;
  usuario: Usuario;
  itens: ItemCarrinho[];
  total: number;
  status: 'pendente' | 'confirmado' | 'enviado' | 'entregue';
  data: Date;
  enderecoEntrega: Endereco;
  formaPagamento: string;
}
