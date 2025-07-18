import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background text-center">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-lg">
          
          {/* Texto */}
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Página não encontrada
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
          
          {/* Botão de Ação */}
          <div className="mt-10">
            <Link to="/">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Voltar para a página inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;