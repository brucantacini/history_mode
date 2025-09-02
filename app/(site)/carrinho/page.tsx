'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCarrinhoStore } from '@/lib/store';

export default function CarrinhoPage() {
  const { itens, total, totalItens, removerItem, atualizarQuantidade, limparCarrinho } = useCarrinhoStore();
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  const handleUpdateQuantity = async (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setIsUpdating(id);
    // Simular delay de atualização
    await new Promise(resolve => setTimeout(resolve, 300));
    
    atualizarQuantidade(id, newQuantity);
    setIsUpdating(null);
  };

  const handleRemoveItem = async (id: string) => {
    setIsUpdating(id);
    // Simular delay de remoção
    await new Promise(resolve => setTimeout(resolve, 300));
    
    removerItem(id);
    setIsUpdating(null);
  };

  if (itens.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: 'Optima, sans-serif' }}>
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-light text-black mb-4">Seu carrinho está vazio</h1>
          <p className="text-gray-600 mb-8 font-light">
            Adicione alguns produtos para começar suas compras
          </p>
          <Link
            href="/produtos"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center font-light"
          >
            <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Optima, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <ShoppingBag className="h-8 w-8 text-yellow-500" strokeWidth={1.5} />
            <h1 className="text-3xl font-light text-black">Carrinho de Compras</h1>
          </div>
          <p className="text-gray-600 font-light">
            {totalItens} item{totalItens !== 1 ? 's' : ''} no carrinho
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg">
              {/* Cart Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-light text-black">Produtos</h2>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {itens.map((item) => (
                  <div key={`${item.produto.id}-${item.tamanho}-${item.cor}`} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-gray-400 text-2xl">👕</div>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-light text-black">
                              {item.produto.nome}
                            </h3>
                            <p className="text-sm text-gray-500 font-light">
                              Tamanho: {item.tamanho} | Cor: {item.cor}
                            </p>
                            <p className="text-sm text-gray-500 font-light">
                              R$ {item.produto.preco.toFixed(2).replace('.', ',')} cada
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-light text-black">
                              R$ {(item.produto.preco * item.quantidade).toFixed(2).replace('.', ',')}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleUpdateQuantity(item.produto.id, item.quantidade - 1)}
                              disabled={isUpdating === item.produto.id || item.quantidade <= 1}
                              className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <Minus className="h-4 w-4" strokeWidth={1.5} />
                            </button>
                            <span className="w-12 text-center text-black font-light">
                              {isUpdating === item.produto.id ? '...' : item.quantidade}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.produto.id, item.quantidade + 1)}
                              disabled={isUpdating === item.produto.id}
                              className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <Plus className="h-4 w-4" strokeWidth={1.5} />
                            </button>
                          </div>

                          <button
                            onClick={() => handleRemoveItem(item.produto.id)}
                            disabled={isUpdating === item.produto.id}
                            className="text-gray-600 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1 font-light"
                          >
                            <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                            <span>Remover</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <button
                    onClick={limparCarrinho}
                    className="text-gray-600 hover:text-black text-sm underline font-light"
                  >
                    Limpar Carrinho
                  </button>
                  <Link
                    href="/produtos"
                    className="text-yellow-500 hover:text-yellow-600 text-sm underline flex items-center font-light"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" strokeWidth={1.5} />
                    Continuar Comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-light text-black mb-4">Resumo do Pedido</h2>
              
              {/* Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600 font-light">
                  <span>Subtotal ({totalItens} itens)</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 font-light">
                  <span>Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 font-light">
                  <span>Taxas</span>
                  <span>R$ 0,00</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-light text-black">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 font-light">
                    ou em até 12x de R$ {(total / 12).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="w-full bg-yellow-500 text-black py-3 px-4 rounded-lg font-light hover:bg-yellow-600 transition-colors text-center block"
              >
                Finalizar Compra
              </Link>

              {/* Payment Methods */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 mb-2 font-light">Formas de pagamento aceitas:</p>
                <div className="flex justify-center space-x-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded font-light">💳 Cartão</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded font-light">🏦 PIX</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded font-light">💰 Boleto</span>
                </div>
              </div>

              {/* Security Info */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 font-light">
                  🔒 Compra 100% segura e protegida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
