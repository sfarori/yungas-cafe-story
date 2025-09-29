const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Desde las montañas de Irupana, en el corazón de Los Yungas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Tradición Familiar en Los Yungas
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En las verdes laderas de Irupana, donde el aire de montaña abraza cada planta de café, 
                nuestra familia ha cultivado con amor y respeto por la tierra durante generaciones.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada grano cuenta la historia de nuestras raíces bolivianas, del trabajo honesto 
                y de la pasión por ofrecer el mejor café de altura de Los Yungas.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nature rounded-full flex items-center justify-center">
                    <span className="text-nature-foreground font-bold">🌱</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Cultivo Sostenible</h4>
                  <p className="text-muted-foreground">Respetamos la naturaleza en cada proceso</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="bg-muted rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">☕</div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Altitude de Cultivo
                </h4>
                <p className="text-3xl font-bold text-accent mb-2">1,500m</p>
                <p className="text-muted-foreground">
                  Altura que da carácter único a nuestro café
                </p>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-earth rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl mb-2">🏔️</div>
                <p className="text-earth-foreground font-semibold">Los Yungas</p>
                <p className="text-earth-foreground/80 text-sm">Bolivia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;