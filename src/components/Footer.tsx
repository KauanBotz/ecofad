import { Zap, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <img
              src="/imagem1.png"
              alt="ECOFAD Logo"
              className="h-8 w-auto object-contain"
            />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed max-w-md mx-auto sm:mx-0">
              Economize até 20% na sua conta de luz com energia limpa e renovável. 
              Contratação 100% digital, sem taxas de adesão e sem fidelidade.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/ecofad.eco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://m.facebook.com/729955663529359/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-center sm:text-left">Links Rápidos</h3>
            <div className="space-y-3 text-sm flex flex-col items-center sm:items-start">
              <button 
                onClick={() => {
                  const element = document.getElementById('como-funciona');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('beneficios');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-secondary-foreground/80 hover:text-primary transition-colors"

              >
                Benefícios
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('calculadora');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-secondary-foreground/80 hover:text-primary transition-colors"

              >
                Calculadora
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-secondary-foreground/80 hover:text-primary transition-colors"

              >
                Contato
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center sm:text-left">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone size={16} className="text-primary" />
                <a 
                  href="https://wa.me/5531973063028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  (31) 97306-3028
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:contato@ecofad.com.br"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  contato@ecofad.com.br
                </a>
              </div>
              <div className="flex items-start gap-2 justify-center sm:justify-start text-center sm:text-left">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  Rua São José do Jacuri, 655<br />
                  Planalto, Belo Horizonte - MG<br />
                  31720-370
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} ECOFAD. Todos os direitos reservados.</p>
          <p className="mt-2">
            Energia limpa e renovável para um futuro sustentável.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;