import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WhatsAppIcon } from "@/lib/whatsapp";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Encontre seu iPhone hoje
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Estoque limitado! Fale agora com nossa equipe e garanta o melhor
            preço.
          </p>

          <Button variant="whatsapp" size="xl" className="animate-pulse-glow" asChild>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
