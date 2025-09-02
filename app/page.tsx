import Link from 'next/link';

export default function EntryPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center" style={{ fontFamily: 'Helvetica Neue, Inter, sans-serif' }}>
      <div className="text-center">
        {/* Logo da Marca */}
        <div className="mb-16">
          <h1 className="text-8xl md:text-9xl font-bold text-white tracking-wider mb-4">
            HISTORY
          </h1>
          <h2 className="text-6xl md:text-7xl font-light text-white tracking-widest">
            MODE
          </h2>
        </div>

        {/* Botão Entrar */}
        <Link 
          href="/inicio"
          className="inline-block bg-white text-black px-12 py-4 text-lg font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          ENTRAR
        </Link>
      </div>
    </div>
  );
}
