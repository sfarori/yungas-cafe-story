import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <About />
        <Products />
        <Process />
        <Contact />  
      </main>
      <Footer />
    </div>
  );
};

export default Index;
