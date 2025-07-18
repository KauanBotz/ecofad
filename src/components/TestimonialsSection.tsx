import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      avatar: "M",
      rating: 5,
      text: "Incrível! Minha conta que era R$ 900 agora vem R$ 720. São R$ 180 de economia todo mês sem fazer nada diferente!"
    },
    {
      name: "João Santos", 
      location: "Rio de Janeiro, RJ",
      avatar: "J",
      rating: 5,
      text: "Estava desconfiado no início, mas funcionou mesmo! Já são 6 meses economizando quase R$ 100 por mês."
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG", 
      avatar: "A",
      rating: 5,
      text: "O processo foi super fácil. Mandei a foto da conta e em poucos dias já estava economizando. Recomendo!"
    },
    {
      name: "Carlos Oliveira",
      location: "Curitiba, PR",
      avatar: "C", 
      rating: 5,
      text: "Economia real na conta de luz! Já indiquei para toda minha família. Atendimento excelente também."
    },
    {
      name: "Fernanda Lima",
      location: "Salvador, BA",
      avatar: "F",
      rating: 5,
      text: "Melhor decisão que tomei! Economizo mais de R$ 150 por mês e ainda contribuo com energia limpa."
    },
    {
      name: "Roberto Mendes", 
      location: "Porto Alegre, RS",
      avatar: "R",
      rating: 5,
      text: "Sem burocracias, sem taxas escondidas. Funciona exatamente como prometido. Muito satisfeito!"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como a ECOFAD transformou a vida financeira de nossos clientes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Clientes satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Economia comprovada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Atendimento 5 estrelas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;