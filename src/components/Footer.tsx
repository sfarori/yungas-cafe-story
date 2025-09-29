const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold mb-4">Café Irupana</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Desde las montañas de Los Yungas hasta tu taza, llevamos la tradición 
              y autenticidad del mejor café boliviano.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Ubicación</h4>
              <p className="text-primary-foreground/80 text-sm">
                Irupana, Los Yungas<br />
                La Paz, Bolivia
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contacto</h4>
              <p className="text-primary-foreground/80 text-sm">
                WhatsApp: +591 7000-0000<br />
                Email: info@cafeirupana.com
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Horarios</h4>
              <p className="text-primary-foreground/80 text-sm">
                Lunes - Sábado<br />
                8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 Café Irupana. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                  Facebook
                </button>
                <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                  Instagram
                </button>
                <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;