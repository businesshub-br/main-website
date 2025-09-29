import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, MessageCircle, Mail, User } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        product_id: "3633ba49-03a5-42ac-bcec-df0add5a77c8",
        id: "68c5a9438450c55985d3860d",
        slug: "chatcenter",
        referral_url: "https://app.membly.com.br/p/68c5a9438450c55985d3860d"
      };

      const response = await fetch("https://back.memb.ly/api/members/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Seus dados foram enviados com sucesso.",
        });
        navigate("/instructions");
      } else {
        throw new Error("Erro ao enviar dados");
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-elegant border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Começar Teste Gratuito
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Preencha seus dados para iniciar o teste da plataforma
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nome completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

             <div className="space-y-2">
  <Label htmlFor="whatsapp" className="text-sm font-medium">
    WhatsApp
  </Label>
  <div className="relative">
    <PhoneInput
      country={"br"} // Brasil como padrão
      value={formData.whatsapp}
      onChange={(value) =>
        setFormData((prev) => ({ ...prev, whatsapp: value }))
      }
      enableSearch={true}
      inputProps={{
        name: "whatsapp",
        required: true,
      }}
      inputClass="pl-10 w-full !py-2 !rounded-md !border !border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      buttonClass="!bg-background !border-input"
    />
  </div>
</div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Iniciar Teste Gratuito"
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Ao prosseguir, você concorda com nossos termos de uso e política de privacidade.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadCapture;