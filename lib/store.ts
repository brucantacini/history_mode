import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ItemCarrinho, Usuario } from '@/types';

interface CarrinhoStore {
  itens: ItemCarrinho[];
  usuario: Usuario | null;
  adicionarItem: (item: ItemCarrinho) => void;
  removerItem: (id: string) => void;
  atualizarQuantidade: (id: string, quantidade: number) => void;
  limparCarrinho: () => void;
  setUsuario: (usuario: Usuario) => void;
  logout: () => void;
  total: number;
  totalItens: number;
}

export const useCarrinhoStore = create<CarrinhoStore>()(
  persist(
    (set, get) => ({
      itens: [],
      usuario: null,
      total: 0,
      totalItens: 0,

      adicionarItem: (item) => {
        const { itens } = get();
        const itemExistente = itens.find(
          (i) => 
            i.produto.id === item.produto.id && 
            i.tamanho === item.tamanho && 
            i.cor === item.cor
        );

        if (itemExistente) {
          const novosItens = itens.map((i) =>
            i === itemExistente
              ? { ...i, quantidade: i.quantidade + item.quantidade }
              : i
          );
          set({ itens: novosItens });
        } else {
          set({ itens: [...itens, item] });
        }

        // Atualizar totais
        const novosItens = get().itens;
        const total = novosItens.reduce((sum, item) => sum + (item.produto.preco * item.quantidade), 0);
        const totalItens = novosItens.reduce((sum, item) => sum + item.quantidade, 0);
        set({ total, totalItens });
      },

      removerItem: (id) => {
        const { itens } = get();
        const novosItens = itens.filter((item) => item.produto.id !== id);
        set({ itens: novosItens });
        
        // Atualizar totais
        const total = novosItens.reduce((sum, item) => sum + (item.produto.preco * item.quantidade), 0);
        const totalItens = novosItens.reduce((sum, item) => sum + item.quantidade, 0);
        set({ total, totalItens });
      },

      atualizarQuantidade: (id, quantidade) => {
        const { itens } = get();
        const novosItens = itens.map((item) =>
          item.produto.id === id ? { ...item, quantidade } : item
        );
        set({ itens: novosItens });
        
        // Atualizar totais
        const total = novosItens.reduce((sum, item) => sum + (item.produto.preco * item.quantidade), 0);
        const totalItens = novosItens.reduce((sum, item) => sum + item.quantidade, 0);
        set({ total, totalItens });
      },

      limparCarrinho: () => {
        set({ itens: [], total: 0, totalItens: 0 });
      },

      setUsuario: (usuario) => {
        set({ usuario });
      },

      logout: () => {
        set({ usuario: null });
      },
    }),
    {
      name: 'carrinho-store',
    }
  )
);
