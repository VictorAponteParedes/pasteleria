import Header from "../Header";
import HeroSection from "../HeroSection";
import Products from "../Products";
import Menus from "../Menu";
import Contact from "../Contact";

const HomeScreen = () => {
  return (
    <div className="relative">
      {/* Header fijo arriba */}
      <div className="relative z-20">
        <Header />
      </div>
      <HeroSection />
      <Products />
      
      {/* Agregamos la sección de Menú */}
      <Menus />

      <Contact/>
    </div>
  );
};

export default HomeScreen;
