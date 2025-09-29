import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-serif text-xl font-bold text-foreground">
            Café Irupana
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Proceso
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              variant="outline"
              size="sm"
            >
              Contacto
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              onClick={() => scrollToSection('contacto')}
              variant="outline"
              size="sm"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;