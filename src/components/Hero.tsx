import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee-plantation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Café Irupana
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 opacity-90">
          El auténtico sabor de Los Yungas
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
          Café artesanal de altura, cultivado con tradición y sostenibilidad 
          en las montañas bolivianas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Conoce Nuestra Historia
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Ver Productos
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;