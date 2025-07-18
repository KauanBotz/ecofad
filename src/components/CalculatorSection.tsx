import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Calculator, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CalculatorSection = () => {
  const [billValue, setBillValue] = useState("");
  const [distributor, setDistributor] = useState("");
  const [savings, setSavings] = useState<number | null>(null);
  const [originalValue, setOriginalValue] = useState<number | null>(null);
  const { toast } = useToast();

  const distributors = [
    "CEMIG - Companhia Energética de Minas Gerais",
    "CPFL Energia",
    "Eletrobras",
    "EDP Brasil",
    "Energisa",
    "Enel Brasil",
    "Light",
    "RGE Sul",
    "Celpe",
    "Coelba"
  ];

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, "");
    const formattedValue = (parseFloat(numericValue) / 100).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );
    return formattedValue;
  };

  const handleValueChange = (value: string) => {
    setBillValue(formatCurrency(value));
  };

  const calculateSavings = () => {
    const value = parseFloat(
      billValue.replace(/[^\d,]/g, "").replace(",", ".")
    );

    if (isNaN(value) || value <= 0) {
      toast({
        title: "Valor inválido",
        description: "Por favor, insira um valor válido para sua conta de luz.",
        variant: "destructive"
      });
      return;
    }

    if (!distributor) {
      toast({
        title: "Distribuidora não selecionada",
        description: "Por favor, selecione sua distribuidora de energia.",
        variant: "destructive"
      });
      return;
    }

    const savingsAmount = value * 0.2;
    setSavings(savingsAmount);
    setOriginalValue(value);
  };

  const newValue = originalValue && savings ? originalValue - savings : null;

  return (
    <section id="calculadora" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calcule Sua Economia
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubra quanto você pode economizar na sua conta de luz
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-lg p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Formulário */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bill-value">
                    Valor médio da sua fatura de energia (R$)
                    <span className="text-xs text-muted-foreground block mt-1">* correspondente ao consumo de energia não incluindo tarifas</span>
                  </Label>
                  <Input
                    id="bill-value"
                    type="text"
                    placeholder="R$ 0,00"
                    value={billValue}
                    onChange={(e) => handleValueChange(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="distributor">Distribuidora de energia</Label>
                  <Select value={distributor} onValueChange={setDistributor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua distribuidora" />
                    </SelectTrigger>
                    <SelectContent>
                      {distributors.map((dist) => (
                        <SelectItem key={dist} value={dist}>
                          {dist}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculateSavings}
                  className="w-full flex items-center gap-2"
                  size="lg"
                >
                  <Calculator size={20} />
                  Calcular minha economia
                </Button>
              </div>

              {/* Resultado */}
              <div className="flex items-center justify-center">
                {savings !== null ? (
                  <div className="text-center space-y-4 p-4 md:p-8 bg-primary-light rounded-lg w-full max-w-sm mx-auto">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#3CAEA3] to-[#20639B] rounded-full flex items-center justify-center mx-auto">
                      <Zap className="text-white" size={32} />
                      </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Sua economia mensal será de:
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {savings.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </div>
                      <div className="text-sm font-bold text-primary mt-2">
                        Novo valor: {newValue?.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Valor original: {originalValue?.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Economia anual:{" "}
                        {(savings * 12).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </div>
                    </div>
                    <Button
                      variant="default"
                      onClick={() => {
                        const element = document.getElementById("contato");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Quero economizar agora!
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      1 assinatura = 1 árvore plantada na Amazônia
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-4 p-8 text-muted-foreground">
                    <Calculator size={64} className="mx-auto opacity-50" />
                    <p>Preencha os dados acima para calcular sua economia</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;