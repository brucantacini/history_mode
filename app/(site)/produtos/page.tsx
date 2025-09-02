'use client';

import { useState, useMemo } from 'react';
import { Filter, Grid, List, Search, X } from 'lucide-react';
import ProductCard from '@/components/produto/ProductCard';
import { produtos, categorias } from '@/lib/data';
import { Produto } from '@/types';

export default function ProdutosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState<string>('');
  const [selectedPreco, setSelectedPreco] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProdutos = useMemo(() => {
    return produtos.filter((produto) => {
      const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           produto.descricao.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategoria = !selectedCategoria || produto.categoria === selectedCategoria;
      
      const matchesPreco = !selectedPreco || (() => {
        switch (selectedPreco) {
          case '0-50':
            return produto.preco <= 50;
          case '50-100':
            return produto.preco > 50 && produto.preco <= 100;
          case '100-200':
            return produto.preco > 100 && produto.preco <= 200;
          case '200+':
            return produto.preco > 200;
          default:
            return true;
        }
      })();

      return matchesSearch && matchesCategoria && matchesPreco;
    });
  }, [searchTerm, selectedCategoria, selectedPreco]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategoria('');
    setSelectedPreco('');
  };

  const hasActiveFilters = searchTerm || selectedCategoria || selectedPreco;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Helvetica Neue, Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-4">Nossos Produtos</h1>
          <p className="text-lg text-gray-600 font-light">
            Descubra nossa coleção completa de roupas e acessórios
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 font-light"
                />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-red-500 text-white'
                    : 'text-gray-600 hover:text-black hover:bg-gray-200'
                }`}
              >
                <Grid className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-red-500 text-white'
                    : 'text-gray-600 hover:text-black hover:bg-gray-200'
                }`}
              >
                <List className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 font-light"
            >
              <Filter className="h-5 w-5" strokeWidth={1.5} />
              <span>Filtros</span>
            </button>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center space-x-3 mt-6 flex-wrap">
              <span className="text-sm text-gray-600 font-light">Filtros ativos:</span>
              {searchTerm && (
                <span className="bg-red-100 text-black text-sm px-4 py-2 rounded-full flex items-center border border-red-200 font-light">
                  Busca: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-2 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </span>
              )}
              {selectedCategoria && (
                <span className="bg-red-100 text-black text-sm px-4 py-2 rounded-full flex items-center border border-red-200 font-light">
                  Categoria: {categorias.find(c => c.id === selectedCategoria)?.nome}
                  <button
                    onClick={() => setSelectedCategoria('')}
                    className="ml-2 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </span>
              )}
              {selectedPreco && (
                <span className="bg-red-100 text-black text-sm px-4 py-2 rounded-full flex items-center border border-red-200 font-light">
                  Preço: {selectedPreco === '0-50' ? 'Até R$ 50' : 
                          selectedPreco === '50-100' ? 'R$ 50 - R$ 100' :
                          selectedPreco === '100-200' ? 'R$ 100 - R$ 200' : 'Acima de R$ 200'}
                  <button
                    onClick={() => setSelectedPreco('')}
                    className="ml-2 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-black underline transition-colors font-light"
              >
                Limpar todos
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light text-black">Filtros</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-600 hover:text-black transition-colors"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Categories Filter */}
              <div className="mb-8">
                <h4 className="font-light text-black mb-4 text-lg">Categorias</h4>
                <div className="space-y-3">
                  {categorias.map((categoria) => (
                    <label key={categoria.id} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="categoria"
                        value={categoria.id}
                        checked={selectedCategoria === categoria.id}
                        onChange={(e) => setSelectedCategoria(e.target.value)}
                        className="mr-3 text-red-500 focus:ring-red-500 border-gray-300"
                      />
                      <span className="text-gray-600 group-hover:text-black transition-colors font-light">
                        {categoria.nome}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-light text-black mb-4 text-lg">Faixa de Preço</h4>
                <div className="space-y-3">
                  {[
                    { value: '0-50', label: 'Até R$ 50' },
                    { value: '50-100', label: 'R$ 50 - R$ 100' },
                    { value: '100-200', label: 'R$ 100 - R$ 200' },
                    { value: '200+', label: 'Acima de R$ 200' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="preco"
                        value={option.value}
                        checked={selectedPreco === option.value}
                        onChange={(e) => setSelectedPreco(e.target.value)}
                        className="mr-3 text-red-500 focus:ring-red-500 border-gray-300"
                      />
                      <span className="text-gray-600 group-hover:text-black transition-colors font-light">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-100 text-black py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 border border-gray-200 font-light"
                >
                  Limpar Filtros
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600 text-lg font-light">
                {filteredProdutos.length} produto{filteredProdutos.length !== 1 ? 's' : ''} encontrado{filteredProdutos.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Products */}
            {filteredProdutos.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
              }`}>
                {filteredProdutos.map((produto) => (
                  <ProductCard key={produto.id} produto={produto} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-gray-400 text-8xl mb-6">🔍</div>
                <h3 className="text-2xl font-light text-black mb-4">
                  Nenhum produto encontrado
                </h3>
                <p className="text-gray-600 mb-8 text-lg font-light">
                  Tente ajustar os filtros ou termos de busca
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 font-light"
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
