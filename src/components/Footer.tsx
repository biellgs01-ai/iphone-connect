import { Apple, Instagram } from "lucide-react";
import { WhatsAppIcon, getWhatsAppLink } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-xl flex items-center justify-center">
              <Apple className="w-5 h-5 text-background" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Master Apple
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/masterapple"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Master Apple. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Loja especializada em iPhones seminovos e novos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
