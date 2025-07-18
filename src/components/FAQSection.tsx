import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o desconto na conta de luz?",
      answer: "A ECOFAD utiliza o sistema de compensação de energia previsto pela ANEEL. Conectamos você a usinas de energia renovável que injetam energia limpa na rede elétrica. Você recebe créditos de energia que são descontados diretamente na sua fatura, gerando economia real sem necessidade de instalação de equipamentos."
    },
    {
      question: "Preciso instalar algum equipamento na minha casa?",
      answer: "Não! Esse é um dos grandes benefícios da ECOFAD. Você não precisa instalar painéis solares, equipamentos ou fazer qualquer alteração na sua residência. Todo o processo é digital e a economia aparece diretamente na sua fatura de energia."
    },
    {
      question: "Quanto tempo leva para começar a economizar?",
      answer: "Após a contratação e envio dos documentos necessários, o processo de ativação leva em média de 30 a 45 dias, dependendo da sua distribuidora de energia. Após esse período, você já começa a receber os descontos na sua próxima fatura."
    },
    {
      question: "Existe alguma taxa de adesão ou mensalidade?",
      answer: "Não cobramos nenhuma taxa de adesão ou mensalidade. Nossa remuneração vem de uma pequena porcentagem do desconto que você recebe. Ou seja, só ganhamos quando você economiza!"
    },
    {
      question: "Posso cancelar o serviço quando quiser?",
      answer: "Sim! Não exigimos fidelidade. Você pode cancelar o serviço a qualquer momento sem multas ou taxas adicionais. Basta entrar em contato com nosso suporte."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o serviço da ECOFAD
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;