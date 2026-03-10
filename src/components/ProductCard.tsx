import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WhatsAppIcon } from "@/lib/whatsapp";
import { Product, formatPrice } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappLink = `https://wa.me/5511991958127?text=${encodeURIComponent(
    `Olá! Tenho interesse no ${product.model} ${product.storage} - ${formatPrice(product.price)}`
  )}`;

  return (
    <div className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-glow">
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-b from-secondary/50 to-background p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={product.image}
          alt={product.model}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop";
          }}
        />
        {/* Condition Badge */}
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 bg-primary/10 text-primary border-primary/20"
        >
          {product.condition}
        </Badge>
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {product.model}
          </h3>
          <p className="text-sm text-muted-foreground">{product.storage}</p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-muted-foreground">
              ou 12x de {formatPrice(Math.ceil(product.price / 12))}
            </p>
          </div>
        </div>

        <Button variant="whatsapp" size="default" className="w-full" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="w-4 h-4" />
            Tenho interesse
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
