import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Zap, Shield, Users, AlertTriangle, Target, Cog, Bot, Calendar, Lock, Check, Star, Building2 } from "lucide-react";
import logoImage from "@/assets/chat4business-logo-blue.png";

const Index = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Atendimento lento e desorganizado",
      description: "Perda de clientes por falta de agilidade no atendimento",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Esquecimento de follow-ups ou compromissos",
      description: "Oportunidades perdidas por falta de controle",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Repetição de respostas a perguntas iguais",
      description: "Tempo perdido com respostas manuais repetitivas",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Falta de controle sobre conversas e permissões",
      description: "Dificuldade para gerenciar equipes e acessos",
    },
  ];

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Automação completa de conversas",
      description: "Fluxos inteligentes que respondem automaticamente",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Gestão visual tipo Kanban",
      description: "Organize seus leads e vendas visualmente",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Integração com sistemas externos",
      description: "Conecte com CRM, ERP e outras ferramentas",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbots inteligentes",
      description: "IA que entende e responde como humano",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendamento automático",
      description: "Automatize marcação de reuniões e consultas",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Controle de permissões avançado",
      description: "Defina quem pode acessar o quê na sua equipe",
    },
  ];

  const plans = [
    {
      name: "Basic",
      description: "Ideal para pequenos negócios",
      price: "R$ 79,90",
      period: "/mês",
      features: [
        "1 Usuário",
        "Acesso via Extensão",
        "Agendamento de Mensagens",
        "CRM integrado",
        "Scripts e Mensagens rápidas"
      ],
      popular: false,
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Premium",
      description: "Para equipes em crescimento",
      price: "R$ 179,90",
      period: "/mês",
      features: [
        "Até 4 usuários",
        "Acesso via Extensão",
        "Chat interno",
        "Relatórios Avançados",
        "Suporte Prioritário"
      ],
      popular: true,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Cloud",
      description: "Solução completa enterprise",
      price: "R$ 279,90",
      period: "/mês",
      features: [
        "Acesso via plataforma",
        "Usuários Ilimitados*",
        "Múltiplos CRM's",
        "Privacidade Total",
        "Servidor 24h"
      ],
      popular: false,
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* White Top Banner */}
      <div className="bg-white py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto w-60 h-60 bg-gradient-accent rounded-3xl flex items-center justify-center shadow-glow">
            <img 
              src={logoImage} 
              alt="Chat 4 Your Business Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolucione seu
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              WhatsApp Business
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Automatize conversas, aumente vendas e ofereça um atendimento excepcional com nossa plataforma avançada.
          </p>
          
          <div className="space-x-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-6"
            >
              <Link to="/lead-capture">
                Testar Agora Grátis
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-primary bg-white/90 hover:bg-white backdrop-blur-sm text-lg px-8 py-6"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chega de atendimentos manuais e esquecimentos
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Problemas que todo negócio enfrenta no WhatsApp e que podem estar custando vendas para você
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:shadow-glow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center text-white mb-4">
                    {problem.icon}
                  </div>
                  <CardTitle className="text-white text-lg">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/80">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            A Solução: Um funil de vendas dentro do WhatsApp
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Plataforma completa que automatiza fluxos, distribui atendimentos, integra sistemas e permite automações inteligentes — tudo acessível via navegador ou mobile.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tudo que você precisa em uma plataforma
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Funcionalidades completas para automatizar e otimizar seu WhatsApp
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:shadow-glow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-lg">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/80">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-white text-lg px-8 py-6"
            >
              <Link to="/lead-capture">
                Conhecer a Plataforma
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha o plano ideal para seu negócio
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Planos flexíveis que crescem junto com sua empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`border-0 backdrop-blur-sm hover:shadow-glow transition-all duration-300 relative ${
                plan.popular 
                  ? 'bg-white/20 ring-2 ring-white/30' 
                  : 'bg-white/10 hover:bg-white/15'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center text-white mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-white text-2xl">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-white/80 text-base">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/80 text-lg">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/90">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-gradient-accent hover:shadow-glow text-white'
                    } transition-all duration-300`}
                  >
                    <Link to="/lead-capture">
                      Teste Agora
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/80 text-sm">
              Todos os planos incluem 3 dias de teste gratuito • Sem compromisso
            </p>
            <p className="text-white/70 text-xs mt-2">
              *Cada usuário adicional possui custo adicional conforme necessidade
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para começar?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Comece seu teste gratuito hoje e descubra como nossa plataforma pode transformar seu negócio.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-white text-lg px-8 py-6"
              >
                <Link to="/lead-capture">
                  Iniciar Teste Gratuito
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
