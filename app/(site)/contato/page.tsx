import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Optima, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-black mb-6">Entre em Contato</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Tem alguma dúvida? Quer fazer uma sugestão? Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-light text-black mb-6">Envie uma Mensagem</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-light text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-light"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-light"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="assunto" className="block text-sm font-light text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-light"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-light text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none font-light"
                  placeholder="Descreva sua dúvida ou sugestão..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-4 px-6 rounded-lg font-light hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" strokeWidth={1.5} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-black mb-6">Informações de Contato</h2>
              <p className="text-gray-600 mb-8 font-light">
                Estamos sempre disponíveis para atender você da melhor forma possível.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-yellow-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-light text-black mb-1">E-mail</h3>
                  <p className="text-gray-600 font-light">contato@historymode.com</p>
                  <p className="text-gray-600 font-light">suporte@historymode.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-yellow-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-light text-black mb-1">Telefone</h3>
                  <p className="text-gray-600 font-light">(11) 99999-9999</p>
                  <p className="text-gray-600 font-light">(11) 88888-8888</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-yellow-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-light text-black mb-1">Endereço</h3>
                  <p className="text-gray-600 font-light">Rua das Flores, 123</p>
                  <p className="text-gray-600 font-light">Bairro Centro - São Paulo, SP</p>
                  <p className="text-gray-600 font-light">CEP: 01234-567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-light text-black mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600 font-light">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600 font-light">Sábado: 9h às 14h</p>
                  <p className="text-gray-600 font-light">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-light text-black mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-yellow-100 transition-all duration-300">
                  <span className="text-black text-lg">📱</span>
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-yellow-100 transition-all duration-300">
                  <span className="text-black text-lg">📷</span>
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-yellow-100 transition-all duration-300">
                  <span className="text-black text-lg">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
