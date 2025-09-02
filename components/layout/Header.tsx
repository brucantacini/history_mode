'use client';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCarrinhoStore } from '@/lib/store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItens } = useCarrinhoStore();

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/inicio" className="flex items-center space-x-3">
            <span className="text-2xl font-bold tracking-wider">HISTORY MODE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link href="/colecoes" className="text-white hover:text-red-500 transition-colors duration-300 font-medium tracking-wide">
              COLEÇÕES
            </Link>
            <Link href="/sobre" className="text-white hover:text-red-500 transition-colors duration-300 font-medium tracking-wide">
              SOBRE
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-8">
            <button className="text-white hover:text-red-500 transition-colors duration-300">
              <Search className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <button className="text-white hover:text-red-500 transition-colors duration-300">
              <User className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <Link href="/carrinho" className="text-white hover:text-red-500 transition-colors duration-300 relative">
              <ShoppingCart className="h-6 w-6" strokeWidth={1.5} />
              {totalItens > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItens}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/colecoes"
                className="block text-white hover:text-red-500 transition-colors duration-300 font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                COLEÇÕES
              </Link>
              <Link
                href="/sobre"
                className="block text-white hover:text-red-500 transition-colors duration-300 font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                SOBRE
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
