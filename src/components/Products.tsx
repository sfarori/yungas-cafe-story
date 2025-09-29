import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coffeeProducts from "@/assets/coffee-products.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Café en Grano",
      description: "Granos enteros tostados artesanalmente, perfectos para moler en casa y disfrutar del aroma más fresco.",
      features: ["Tostado artesanal", "Conserva todos los aceites", "Máxima frescura"],
      price: "Bs. 45",
      weight: "250g"
    },
    {
      id: 2,
      title: "Café Molido",
      description: "Molido fino especial para métodos tradicionales, listo para preparar la taza perfecta.",
      features: ["Molido ideal", "Listo para usar", "Sabor intenso"],
      price: "Bs. 40",
      weight: "250g"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestros Productos
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cada producto refleja la calidad y tradición de Los Yungas
            </p>
          </div>

          <div className="mb-12 animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden h-80 mb-8">
              <img 
                src={coffeeProducts} 
                alt="Café artesanal en grano y molido" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <h3 className="font-serif text-2xl font-bold mb-2">Café Artesanal Premium</h3>
                <p className="text-lg opacity-90">De la montaña a tu taza</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className={`hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-serif text-2xl text-foreground">
                      {product.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{product.price}</div>
                      <div className="text-sm text-muted-foreground">{product.weight}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Características:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Consultar Disponibilidad
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              ¿Interesado en pedidos al por mayor o distribución?
            </p>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Contactar para Mayoreo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;