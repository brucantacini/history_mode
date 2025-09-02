import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import ProductCard from '@/components/produto/ProductCard';
import { produtos } from '@/lib/data';

export default function InicioPage() {
  const produtosDestaque = produtos.slice(0, 8);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Helvetica Neue, Inter, sans-serif' }}>
      {/* Hero Banner Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
          {/* Placeholder para imagem/vídeo - você pode substituir por uma imagem real */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            STREETWEAR
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide max-w-2xl mx-auto">
            Onde a cultura urbana encontra a moda contemporânea
          </p>
          <Link
            href="/colecoes"
            className="inline-flex items-center bg-red-500 text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            EXPLORAR COLEÇÃO
            <ArrowRight className="ml-3 h-6 w-6" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Play Button for Video */}
        <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300">
          <Play className="h-8 w-8 text-white ml-1" strokeWidth={1.5} />
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-wider">
              PRODUTOS EM DESTAQUE
            </h2>
            <p className="text-lg text-gray-600 font-light tracking-wide">
              As peças mais vendidas da temporada
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produtosDestaque.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/colecoes"
              className="inline-flex items-center border-2 border-black text-black px-8 py-4 text-lg font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              VER TODA A COLEÇÃO
              <ArrowRight className="ml-3 h-6 w-6" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider">
                NOSSA HISTÓRIA
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                HISTORY MODE nasceu da paixão pela cultura urbana e pela moda contemporânea. 
                Criamos peças que refletem a energia das ruas, combinando estilo atemporal 
                com inovação constante.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
              >
                SABER MAIS
                <ArrowRight className="ml-3 h-6 w-6" strokeWidth={1.5} />
              </Link>
            </div>
            <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Imagem da marca</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6 tracking-wider">
            FIQUE POR DENTRO
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            Seja o primeiro a saber sobre novos lançamentos e ofertas exclusivas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-6 py-4 border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="bg-red-500 text-white px-8 py-4 font-medium tracking-wide hover:bg-red-600 transition-all duration-300">
              INSCREVER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
