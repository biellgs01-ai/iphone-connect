import { useState, useEffect } from "react";
import { Menu, X, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WhatsAppIcon } from "@/lib/whatsapp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-foreground rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Apple className="w-5 h-5 md:w-6 md:h-6 text-background" />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground">
              Master Apple
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#produtos"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Produtos
            </a>
            <a
              href="#beneficios"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Depoimentos
            </a>
            <Button variant="whatsapp" size="default" asChild>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Button variant="whatsapp" size="sm" asChild>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 animate-fade-in">
            <nav className="flex flex-col py-4 px-4 gap-4">
              <a
                href="#produtos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium py-2"
              >
                Produtos
              </a>
              <a
                href="#beneficios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium py-2"
              >
                Benefícios
              </a>
              <a
                href="#depoimentos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium py-2"
              >
                Depoimentos
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
