import { Check, Leaf, Shield, Users, Zap, CreditCard, Monitor, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Até 20% de desconto real",
      description: "Economize até 20% na sua conta de luz todos os meses, sem truques ou pegadinhas.",
    },
    {
      icon: CreditCard,
      title: "Sem taxa de adesão",
      description: "Não cobramos nenhuma taxa para você começar a economizar. Cadastro 100% gratuito.",
    },
    {
      icon: Monitor,
      title: "Contrato 100% digital",
      description: "Todo o processo é feito online, sem burocracia e com total segurança para você.",
    },
    {
      icon: Shield,
      title: "Sem fidelidade",
      description: "Você pode cancelar quando quiser, sem multas ou taxas adicionais.",
    },
    {
      icon: Leaf,
      title: "Energia limpa",
      description: "Energia de fontes renováveis, contribuindo para um planeta mais sustentável.",
    },
    {
      icon: Users,
      title: "Suporte especializado",
      description: "Nossa equipe está sempre disponível para tirar suas dúvidas e te ajudar.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios ECOFAD</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Economize na sua conta de luz com vantagens exclusivas e sem complicações.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nova seção: Formas de Usar seu Desconto */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Formas de Usar seu Desconto</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Na Ecofad, você escolhe como usar seu desconto:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Desconto direto na fatura de energia</h4>
              <p className="text-muted-foreground">Economize diretamente na sua conta de luz todos os meses</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Doação parcial para projetos sociais</h4>
              <p className="text-muted-foreground">Contribua para projetos que fazem a diferença na sociedade</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Participação em consórcio de energia</h4>
              <p className="text-muted-foreground">Invista em energia limpa e tenha retorno financeiro</p>
            </div>

          </div>
          
        </div>

        {/* Call to Action */}
<div className="text-center mt-24">
  <div className="p-6 pb-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border max-w-2xl mx-auto h-full flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold mb-4">Seja um parceiro Ecofad!</h3>
      <p className="text-muted-foreground mb-6">
        Quer ganhar comissões indicando clientes para Ecofad?<br />
        Cadastre-se como parceiro e comece a lucrar indicando clientes que querem economizar na conta de luz. Você não precisa vender, só conectar.
      </p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLScXSex5uAFYQqEO2R-8XmSU7EDqp0QSLjMfMidNUnu0IqC3wA/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] hover:from-[#359B90] hover:to-[#1A5588] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <Zap size={20} />
        Quero ser um parceiro Ecofad
      </a>
    </div>

    <p className="text-sm text-muted-foreground text-center mt-2 mb-2">
      1 assinatura = 1 árvore plantada na Amazônia
    </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default BenefitsSection;