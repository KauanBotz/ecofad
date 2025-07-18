import { FileText, UserCheck, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Envie seus dados",
      description: "Envie seus dados e uma foto da sua conta de luz mais recente.",
      icon: FileText,
    },
    {
      number: "2", 
      title: "Ativação do cadastro",
      description: "Nossa equipe realiza a ativação do seu cadastro no sistema.",
      icon: UserCheck,
    },
    {
      number: "3",
      title: "Comece a economizar",
      description: "Comece a economizar já na sua próxima fatura de energia.",
      icon: Zap,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Economizar na sua conta de luz nunca foi tão simples. Apenas três passos para começar a economizar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-primary/30 z-0"></div>
                )}
                
                <div className="relative z-10 space-y-6">
                  {/* Step number and icon */}
                  <div className="relative mx-auto w-24 h-24 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={32} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="text-sm text-primary font-semibold">
                      Passo {step.number}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;