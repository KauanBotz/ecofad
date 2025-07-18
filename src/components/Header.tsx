import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b h-20">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between min-h-[80px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <img
              src="/imagem2.png"
              alt="ECOFAD Logo"
              className="h-8 w-auto object-contain"
            />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection('beneficios')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Calculadora
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('calculadora')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Calculadora
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;