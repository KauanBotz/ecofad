import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('calculadora');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContato = () => {
  const element = document.getElementById('contato');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


  const getCurrentMonthYear = () => {
    const now = new Date();
    const month = now.toLocaleDateString('pt-BR', { month: 'long' });
    const year = now.getFullYear();
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary-light/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1 lg:ml-6 mt-8 sm:mt-4 lg:mt-0">
            <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
                    <span className="text-primary">Economia que faz</span><br />
                    a <span className="text-secondary">diferença</span>
                  </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Até <span className="text-primary font-semibold">20% de economia</span> na sua conta de luz sem obras, sem dívidas, 100% digital.<br />
                E o melhor: sua escolha ainda ajuda a preservar a vida e o planeta.<br /><br />
                Com a Ecofad, você consome energia limpa e ainda investe no futuro presente
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContato}
                className="flex items-center gap-2"
              >
                Quero economizar agora
                <Zap size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToForm}
                className="flex items-center gap-2"
              >
                Calcule sua economia
                <ArrowRight size={20} />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground text-center lg:text-left mt-1">
              1 assinatura = 1 árvore plantada na Amazônia
            </p>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative flex justify-center order-2 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
              
              {/* Bill Mockup */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-64 sm:w-60 sm:h-72 lg:w-64 lg:h-80 bg-background rounded-xl shadow-2xl border p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm text-muted-foreground">Conta de Luz</div>
                      <div className="font-semibold text-sm sm:text-base">{getCurrentMonthYear()}</div>
                    </div>
                  </div>
                  
                  {/* Lines */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-2 sm:h-3 bg-primary rounded"></div>
                    <div className="h-2 sm:h-3 bg-primary/60 rounded w-4/5"></div>
                    <div className="h-2 sm:h-3 bg-primary/40 rounded w-3/5"></div>
                  </div>
                  
                  {/* Amount */}
                  <div className="border-t pt-3 sm:pt-4 mt-6 sm:mt-8">
                    <div className="text-center">
                      <div className="text-xs sm:text-sm text-muted-foreground">Valor com desconto</div>
                      <div className="text-xl sm:text-2xl font-bold text-primary">R$ 720,00</div>
                      <div className="text-xs sm:text-sm text-muted-foreground line-through">R$ 900,00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-primary font-bold text-sm sm:text-base">-20%</span>
              </div>
              
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-secondary/10 rounded-full"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;