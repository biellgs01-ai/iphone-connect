import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WhatsAppIcon } from "@/lib/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-14 h-14 rounded-full shadow-button animate-pulse-glow"
        asChild
      >
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
