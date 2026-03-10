import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/lib/whatsapp";
import { Percent, Clock, Sparkles } from "lucide-react";

const PROMO_WHATSAPP_LINK = `https://wa.me/5511991958127?text=${encodeURIComponent(
  "Quero aproveitar a promoção nos iPhones"
)}`;

const PromotionSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border-primary/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-semibold">Oferta Especial</span>
              </div>

              {/* Main Content */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Percent className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                    15% OFF
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    em todos os iPhones
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Aproveite essa promoção exclusiva por tempo limitado! 
                Fale agora com nossa equipe e garanta seu desconto.
              </p>

              {/* Timer Badge */}
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Clock className="w-4 h-4" />
                <span>Promoção por tempo limitado</span>
              </div>

              {/* CTA Button */}
              <div>
                <Button 
                  variant="whatsapp" 
                  size="xl" 
                  className="animate-pulse-glow text-lg" 
                  asChild
                >
                  <a
                    href={PROMO_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Aproveitar desconto
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
