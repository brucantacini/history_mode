'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { produtos } from '@/lib/data';
import { useCarrinhoStore } from '@/lib/store';

export default function ProdutoDetalhesPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState('P');
  const [selectedImage, setSelectedImage] = useState(0);
  const { adicionarItem } = useCarrinhoStore();

  const produto = produtos.find(p => p.id === params.id);
  
  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  // Imagens do produto (você pode adicionar mais)
  const productImages = [
    '/baixados.jpg',
    '/baixados (1).jpg', 
    '/Tee shirt.jpg',
    '/Aida As _ Profile _ Fiverr.jpg'
  ];

  const handleAddToCart = () => {
    adicionarItem({
      produto,
      quantidade: 1,
      tamanho: selectedSize,
      cor: 'Preto' // default
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Helvetica Neue, Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button className="flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" strokeWidth={1.5} />
            Voltar
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <Image
                src={productImages[selectedImage]}
                alt={produto.nome}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-700" strokeWidth={1.5} />
                </button>
                <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5 text-gray-700" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-black' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${produto.nome} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-8">
            {/* Product Name */}
            <div>
              <h1 className="text-4xl font-bold text-black mb-4 tracking-wider">
                {produto.nome}
              </h1>
              
              {/* Availability */}
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-green-600 font-medium">Em estoque</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-3xl font-bold text-black">
                R$ {produto.preco.toFixed(2).replace('.', ',')}
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <label className="block text-lg font-medium text-black">
                Tamanho
              </label>
              <div className="flex space-x-4">
                {['P', 'M', 'G', 'GG'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-8 py-4 border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-6 text-lg font-bold tracking-wide hover:bg-gray-800 transition-colors"
              >
                ADICIONAR AO CARRINHO
              </button>
            </div>

            {/* Product Description */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Descrição</h3>
              <p className="text-gray-600 leading-relaxed">
                Esta coleção foi criada para quem busca estilo, conforto e qualidade em cada detalhe. 
                As peças oferecem um design moderno e versátil, ideal para diversas ocasiões, seja para 
                o dia a dia ou momentos especiais. Com um toque de sofisticação e liberdade, cada item 
                é pensado para proporcionar um ajuste perfeito, valorizar o corpo e garantir conforto 
                o tempo todo. Os materiais utilizados são cuidadosamente selecionados para oferecer 
                durabilidade, suavidade e um visual impecável. Experimente a sensação de estar sempre 
                no seu melhor, sem abrir mão da praticidade e do estilo único.
              </p>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Material</span>
                <span className="text-black font-medium">100% Algodão</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Cuidados</span>
                <span className="text-black font-medium">Lavar a máquina 30°C</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Origem</span>
                <span className="text-black font-medium">Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
