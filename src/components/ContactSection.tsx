import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    billAmount: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos obrigatórios
    if (!formData.name || !formData.billAmount || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '02defb74-6872-4dd8-8d34-6a9ae2fd8041',
          subject: 'Formulário - Quero economizar',
          email: 'ecofad.bh@gmail.com',
          name: formData.name,
          phone: formData.phone,
          bill_amount: formData.billAmount,
          message: formData.message || 'Sem mensagem adicional'
        })
      });

      if (response.ok) {
        toast({
          title: "Formulário enviado!",
          description: "Entraremos em contato em breve para processar sua solicitação.",
        });

        // Limpar formulário
        setFormData({
          name: '',
          phone: '',
          billAmount: '',
          message: ''
        });
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar a economizar? Entre em contato conosco e nossa equipe te ajudará.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-6 md:p-8 rounded-xl shadow-lg max-w-md mx-auto lg:max-w-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-primary">Quero Economizar</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Preencha o formulário e nossa equipe entrará em contato
                  </p>
                </div>

              <form 
                onSubmit={handleSubmit} 
                className="space-y-3"
              >
                {/* Campos do formulário sem inputs hidden */}
                
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-sm font-semibold">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-9"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-sm font-semibold">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-9"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="bill-amount" className="text-sm font-semibold">Quanto paga de conta? *</Label>
                  <Input
                    id="bill-amount"
                    name="bill-amount"
                    type="text"
                    placeholder="R$ 200,00"
                    value={formData.billAmount}
                    onChange={(e) => handleInputChange('billAmount', e.target.value)}
                    className="h-9"
                    required
                  />
                </div>

                <Button type="submit" className="w-full flex items-center gap-2" size="sm">
                  <Zap size={16} />
                  Quero economizar agora!
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  1 assinatura = 1 árvore plantada na Amazônia
                </p>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda em receber contato da ECOFAD.
                </p>
              </form>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border max-w-md mx-auto lg:max-w-none">
              <h3 className="text-lg font-bold mb-2">Atendimento Rápido</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Fale conosco agora mesmo pelo WhatsApp e comece a economizar hoje!
              </p>
              <a 
                href="https://wa.me/5531973063028?text=Olá! Gostaria de saber mais sobre como economizar na conta de luz com a ECOFAD."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full flex items-center gap-2" size="sm">
                  <Phone size={16} />
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone/WhatsApp</div>
                    <a 
                      href="https://wa.me/5531973063028" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:underline"
                    >
                      (31) 97306-3028
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="space-y-1">
                      <a 
                        href="mailto:contato@ecofad.com.br"
                        className="text-muted-foreground hover:underline block"
                      >
                        contato@ecofad.com.br
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Endereço</div>
                    <div className="text-muted-foreground">
                      Rua São José do Jacuri, 655<br />
                      Planalto, Belo Horizonte - MG<br />
                      31720-370
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-bold mb-6">Redes Sociais</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/ecofad.eco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Instagram className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm text-muted-foreground">@ecofad.eco</div>
                  </div>
                </a>

                <a 
                  href="https://m.facebook.com/729955663529359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Facebook className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Facebook</div>
                    <div className="text-sm text-muted-foreground">ECOFAD</div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;