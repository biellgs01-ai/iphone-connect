import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "São Paulo, SP",
    rating: 5,
    text: "iPhone 14 Pro em perfeito estado! Atendimento excelente e entrega super rápida. Recomendo!",
  },
  {
    name: "Fernanda S.",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Comprei um iPhone 13 e veio impecável. A garantia me deixou muito mais tranquila.",
  },
  {
    name: "Rafael L.",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Melhor loja de seminovos que já comprei! Preço justo e produto exatamente como descrito.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mais de 1.000 clientes satisfeitos em todo o Brasil
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
