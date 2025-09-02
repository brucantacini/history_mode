import Link from 'next/link';
import { ArrowRight, Users, Award, Heart } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Helvetica Neue, Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            SOBRE NÓS
          </h1>
          <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
            Conheça a história por trás da HISTORY MODE
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8 tracking-wider">
                NOSSA HISTÓRIA
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                A HISTORY MODE nasceu da paixão pela cultura urbana e pela moda contemporânea. 
                Fundada por jovens empreendedores apaixonados por streetwear, nossa marca 
                representa a energia das ruas e a inovação constante.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Acreditamos que a moda é uma forma de expressão e que cada peça conta uma história. 
                Por isso, criamos roupas que não apenas vestem, mas que fazem parte da identidade 
                de quem as usa.
              </p>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Imagem da equipe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 tracking-wider">
              NOSSOS VALORES
            </h2>
            <p className="text-lg text-gray-600 font-light tracking-wide">
              Os princípios que guiam nossa marca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-wide">PASSION</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Amor pela moda e pela cultura urbana em tudo que fazemos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-wide">QUALITY</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Compromisso com a excelência em cada detalhe e peça
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-wide">COMMUNITY</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Construindo uma comunidade unida pela moda e estilo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Imagem da produção</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black mb-8 tracking-wider">
                NOSSA MISSÃO
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                Queremos democratizar o acesso a roupas de qualidade com design contemporâneo, 
                levando a cultura urbana para todos os lugares através da moda.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Acreditamos que a moda deve ser acessível, sustentável e representativa da 
                diversidade das ruas. Por isso, trabalhamos constantemente para criar peças 
                que unem estilo, conforto e responsabilidade.
              </p>
              <Link
                href="/colecoes"
                className="inline-flex items-center bg-black text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-red-500 transition-all duration-300"
              >
                CONHECER NOSSAS PEÇAS
                <ArrowRight className="ml-3 h-6 w-6" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-wider">
              NOSSA EQUIPE
            </h2>
            <p className="text-lg text-gray-300 font-light tracking-wide">
              Conheça as pessoas por trás da HISTORY MODE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-800 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Foto</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">JOÃO SILVA</h3>
              <p className="text-gray-400 font-light">Fundador & CEO</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Foto</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">MARIA SANTOS</h3>
              <p className="text-gray-400 font-light">Diretora Criativa</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Foto</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">PEDRO COSTA</h3>
              <p className="text-gray-400 font-light">Diretor de Marketing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
