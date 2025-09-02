import Link from 'next/link';
import { ArrowRight, Filter, Grid, List } from 'lucide-react';
import ProductCard from '@/components/produto/ProductCard';
import { produtos } from '@/lib/data';

export default function ColecoesPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Helvetica Neue, Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            COLEÇÕES
          </h1>
          <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
            Descubra nossa linha completa de streetwear contemporâneo
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Collection Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Camisetas */}
            <div className="group cursor-pointer">
              <div className="relative h-96 bg-gray-100 overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Imagem Camisetas</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-wide">CAMISETAS</h3>
              <p className="text-gray-600 font-light mb-4">Peças essenciais para o dia a dia</p>
              <Link href="/colecoes/camisetas" className="inline-flex items-center text-red-500 hover:text-red-600 font-medium tracking-wide">
                VER COLECÃO
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>

            {/* Calças */}
            <div className="group cursor-pointer">
              <div className="relative h-96 bg-gray-100 overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Imagem Calças</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-wide">CALÇAS</h3>
              <p className="text-gray-600 font-light mb-4">Conforto e estilo em cada passo</p>
              <Link href="/colecoes/calcas" className="inline-flex items-center text-red-500 hover:text-red-600 font-medium tracking-wide">
                VER COLECÃO
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>

            {/* Acessórios */}
            <div className="group cursor-pointer">
              <div className="relative h-96 bg-gray-100 overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Imagem Acessórios</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-wide">ACESSÓRIOS</h3>
              <p className="text-gray-600 font-light mb-4">Detalhes que fazem a diferença</p>
              <Link href="/colecoes/acessorios" className="inline-flex items-center text-red-500 hover:text-red-600 font-medium tracking-wide">
                VER COLECÃO
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* All Products */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 tracking-wider">
              TODOS OS PRODUTOS
            </h2>
            <p className="text-lg text-gray-600 font-light tracking-wide">
              Explore nossa coleção completa
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produtos.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
