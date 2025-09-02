import { Produto } from '@/types';

export const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Camiseta Básica Premium',
    descricao: 'Camiseta de algodão 100% premium, super confortável e durável',
    preco: 49.90,
    precoOriginal: 69.90,
    imagem: '/images/camiseta-basica.jpg',
    categoria: 'camisetas',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['branco', 'preto', 'azul', 'cinza'],
    estoque: 50,
    destaque: true,
    avaliacoes: [
      {
        id: '1',
        usuario: 'João Silva',
        nota: 5,
        comentario: 'Excelente qualidade! Super recomendo.',
        data: new Date('2024-01-15')
      }
    ]
  },
  {
    id: '2',
    nome: 'Calça Jeans Slim Fit',
    descricao: 'Calça jeans moderna com corte slim, perfeita para o dia a dia',
    preco: 129.90,
    precoOriginal: 159.90,
    imagem: '/images/calca-jeans.jpg',
    categoria: 'calcas',
    tamanhos: ['36', '38', '40', '42', '44'],
    cores: ['azul', 'preto'],
    estoque: 30,
    destaque: true,
    avaliacoes: []
  },
  {
    id: '3',
    nome: 'Blazer Casual',
    descricao: 'Blazer elegante e versátil, ideal para ocasiões formais e casuais',
    preco: 199.90,
    imagem: '/images/blazer-casual.jpg',
    categoria: 'blazers',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['preto', 'azul marinho', 'cinza'],
    estoque: 25,
    destaque: false,
    avaliacoes: []
  },
  {
    id: '4',
    nome: 'Tênis Esportivo',
    descricao: 'Tênis confortável para atividades físicas e uso casual',
    preco: 159.90,
    precoOriginal: 199.90,
    imagem: '/images/tenis-esportivo.jpg',
    categoria: 'calcados',
    tamanhos: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
    cores: ['branco', 'preto', 'azul'],
    estoque: 40,
    destaque: true,
    avaliacoes: []
  },
  {
    id: '5',
    nome: 'Moletom com Capuz',
    descricao: 'Moletom quentinho e confortável, perfeito para dias frios',
    preco: 89.90,
    imagem: '/images/moletom-capuz.jpg',
    categoria: 'moletons',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['cinza', 'preto', 'azul'],
    estoque: 35,
    destaque: false,
    avaliacoes: []
  },
  {
    id: '6',
    nome: 'Shorts Esportivo',
    descricao: 'Shorts leve e confortável para atividades físicas',
    preco: 59.90,
    imagem: '/images/shorts-esportivo.jpg',
    categoria: 'shorts',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['preto', 'azul', 'cinza'],
    estoque: 45,
    destaque: false,
    avaliacoes: []
  }
];

export const categorias = [
  { id: 'camisetas', nome: 'Camisetas', icone: '👕' },
  { id: 'calcas', nome: 'Calças', icone: '👖' },
  { id: 'blazers', nome: 'Blazers', icone: '🧥' },
  { id: 'calcados', nome: 'Calçados', icone: '👟' },
  { id: 'moletons', nome: 'Moletons', icone: '🧥' },
  { id: 'shorts', nome: 'Shorts', icone: '🩳' }
];
