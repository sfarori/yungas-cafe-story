import coffeeRoasting from "@/assets/coffee-roasting.jpg";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Cultivo",
      description: "En las laderas de Los Yungas, a 1,500 metros de altura, cultivamos nuestro café con métodos tradicionales y sostenibles.",
      icon: "🌱"
    },
    {
      number: "02", 
      title: "Cosecha",
      description: "Cada grano es seleccionado a mano en el momento perfecto de maduración, garantizando la máxima calidad.",
      icon: "👋"
    },
    {
      number: "03",
      title: "Procesado",
      description: "Utilizamos métodos naturales de secado al sol y fermentación controlada para desarrollar los sabores únicos.",
      icon: "☀️"
    },
    {
      number: "04",
      title: "Tostado",
      description: "Tostamos artesanalmente en pequeños lotes, controlando cada detalle para obtener el perfil de sabor ideal.",
      icon: "🔥"
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proceso Artesanal
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cada paso refleja nuestro compromiso con la calidad y la tradición
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative animate-scale-in">
              <img 
                src={coffeeRoasting} 
                alt="Proceso de tostado artesanal del café" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl p-4 text-primary-foreground shadow-lg">
                <div className="text-2xl mb-1">⏱️</div>
                <p className="font-semibold">15-20 min</p>
                <p className="text-sm opacity-80">Tostado perfecto</p>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-3xl font-semibold text-foreground">
                Tradición y Técnica
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro proceso combina la sabiduría ancestral de Los Yungas con técnicas 
                modernas de control de calidad. Cada etapa es cuidadosamente monitoreada 
                para garantizar que el sabor auténtico de nuestras montañas llegue a tu taza.
              </p>
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Compromiso de Calidad
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-nature rounded-full mr-3"></span>
                    100% arábica de altura
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-nature rounded-full mr-3"></span>
                    Selección manual de granos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-nature rounded-full mr-3"></span>
                    Tostado en pequeños lotes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`text-center animate-fade-in group`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;