import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Globe, UserPlus, Zap, ExternalLink } from "lucide-react";

const Instructions = () => {
  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Instale a extensão da plataforma parceira",
      description: "Instale a extensão Chatcenter/WAPremium no seu navegador",
      action: (
        <Button 
          variant="outline" 
          className="mt-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() => window.open("https://chromewebstore.google.com/detail/wapremium-multiweb/ibjohbbainfaigcnbgfkjlgolmiaakjg?pli=1", "_blank")}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Clique aqui para instalar
        </Button>
      )
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Abra o WhatsApp Web",
      description: (
        <div>
          <p>Abra o WhatsApp Web com a extensão ativa</p>
          <p className="text-sm text-muted-foreground mt-1 italic">
            *Certifique-se de que o seu WhatsApp Web está conectado com o número do seu negócio informado anteriormente!*
          </p>
        </div>
      )
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Cadastre o seu usuário",
      description: "Complete o processo de cadastro na plataforma"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Comece a usar!",
      description: "Aproveite todas as funcionalidades da plataforma"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="mx-auto w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center shadow-glow mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Obrigado pelas suas informações!
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Siga os procedimentos abaixo para iniciar o seu teste ainda hoje:
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-elegant border-0 bg-card/95 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Passo {index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold leading-tight">
                      {step.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="ml-16">
                  <div className="text-muted-foreground">
                    {step.description}
                  </div>
                  {step.action}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <Card className="shadow-elegant border-0 bg-card/95 backdrop-blur-sm inline-block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Precisa de ajuda?</h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe está pronta para te auxiliar durante todo o processo.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://wa.me/5511931004232?text=Preciso de ajuda para a minha afiliação", "_blank")}>
                Entrar em contato
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Instructions;