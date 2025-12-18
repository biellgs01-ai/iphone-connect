import { Shield, BadgeCheck, Truck, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Revisados e testados",
    description: "Cada iPhone passa por uma inspeção técnica completa",
  },
  {
    icon: Shield,
    title: "Garantia inclusa",
    description: "Todos os aparelhos possuem garantia de funcionamento",
  },
  {
    icon: Truck,
    title: "Entrega para todo Brasil",
    description: "Envio rápido e seguro para qualquer lugar do país",
  },
  {
    icon: CreditCard,
    title: "Pagamento facilitado",
    description: "Parcelamos em até 12x no cartão de crédito",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Master Apple?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Confiança e qualidade em cada detalhe
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
