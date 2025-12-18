import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WhatsAppIcon } from "@/lib/whatsapp";
import { ArrowDown, Shield, Truck, BadgeCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Loja especializada em iPhones
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up text-balance">
            iPhones seminovos com{" "}
            <span className="text-primary">garantia</span> — Master Apple
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up text-balance" style={{ animationDelay: "0.1s" }}>
            Modelos revisados, preços justos e atendimento rápido. Encontre o
            iPhone ideal para você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#produtos">Ver catálogo</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Garantia inclusa</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="text-sm">100% revisados</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-sm">Entrega Brasil</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#produtos" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
