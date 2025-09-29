import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto. ¡Gracias por tu interés!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conecta con Nosotros
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Desde Irupana hasta tu mesa - estamos aquí para compartir nuestra pasión por el café
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-foreground">
                    Información de Contacto
                  </CardTitle>
                  <CardDescription>
                    Nos encanta escuchar de los amantes del café auténtico
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Irupana, Los Yungas<br />
                        La Paz, Bolivia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">
                        +591 7000-0000<br />
                        <span className="text-sm">Horario: 8:00 - 18:00</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-nature rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-nature-foreground">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        info@cafeirupana.com<br />
                        <span className="text-sm">Respondemos en 24 horas</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <p className="mb-6 opacity-90">
                  Descubre el día a día de nuestra producción y la belleza de Los Yungas
                </p>
                <div className="flex space-x-4">
                  <Button variant="secondary" size="sm" className="flex-1">
                    Facebook
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    Instagram
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg animate-scale-in">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription>
                  ¿Tienes preguntas sobre nuestro café? ¿Interesado en distribución? ¡Escríbenos!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu interés en nuestro café..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;