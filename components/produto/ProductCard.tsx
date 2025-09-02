'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Produto } from '@/types';

interface ProductCardProps {
  produto: Produto;
}

export default function ProductCard({ produto }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Mapeamento de imagens para produtos
  const getProductImage = (produto: Produto) => {
    const imageMap: { [key: string]: string } = {
      '1': '/baixados.jpg',
      '2': '/baixados (1).jpg',
      '3': '/Tee shirt.jpg',
      '4': '/Aida As _ Profile _ Fiverr.jpg',
      '5': '/How to Create a Fashion Tech Pack that Elevates Your Style.jpg'
    };
    
    return imageMap[produto.id] || '/baixados.jpg';
  };

  // Imagem secundária para efeito de troca (você pode adicionar mais imagens)
  const getSecondaryImage = (produto: Produto) => {
    const secondaryImageMap: { [key: string]: string } = {
      '1': '/baixados (1).jpg',
      '2': '/Tee shirt.jpg',
      '3': '/Aida As _ Profile _ Fiverr.jpg',
      '4': '/How to Create a Fashion Tech Pack that Elevates Your Style.jpg',
      '5': '/baixados.jpg'
    };
    
    return secondaryImageMap[produto.id] || '/baixados (1).jpg';
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: 'Helvetica Neue, Inter, sans-serif' }}
    >
      {/* Product Image Container */}
      <Link href={`/produtos/${produto.id}`}>
        <div className="relative w-full aspect-square overflow-hidden bg-gray-100 mb-4">
          {/* Primary Image */}
          <Image
            src={getProductImage(produto)}
            alt={produto.nome}
            width={400}
            height={400}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          
          {/* Secondary Image (appears on hover) */}
          <Image
            src={getSecondaryImage(produto)}
            alt={produto.nome}
            width={400}
            height={400}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
            }`}
          />

          {/* Quick Add Button */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button className="bg-black text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-red-500 transition-colors duration-300">
              VER DETALHES
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <Link href={`/produtos/${produto.id}`}>
          <h3 className="text-lg font-medium text-black mb-2 tracking-wide hover:text-red-500 transition-colors">
            {produto.nome}
          </h3>
        </Link>
        <p className="text-lg font-bold text-black">
          R$ {produto.preco.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
}
