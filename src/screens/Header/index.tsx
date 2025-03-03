import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPYq6R8weqjW6vN9DD0L1diEYmDip6XeOMQ&s"
            alt="Dulce Encanto"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-xl font-bold text-gray-700">Dulce Encanto</span>
        </div>

        {/* Menú */}
        <nav>
          <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
            <li><a href="#" className="hover:text-pink-500">Inicio</a></li>
            <li><a href="#" className="hover:text-pink-500">Productos</a></li>
            <li><a href="#" className="hover:text-pink-500">Menú</a></li>
            <li><a href="#" className="hover:text-pink-500">Contacto</a></li>
          </ul>
        </nav>

        {/* Botón Ordenar Ahora */}
        <a
          href="#"
          className="bg-pink-300 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-400 transition"
        >
          Ordenar Ahora
        </a>
      </div>
    </header>
  );
};

export default Header;
