import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            iPhones disponíveis
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Todos os aparelhos são revisados e testados pela nossa equipe
            técnica
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
