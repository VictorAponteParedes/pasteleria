const HeroSection = () => {
    return (
     <>
     
     {/* Sección Hero con imagen de fondo */}
     <section
        className="relative w-full h-screen bg-cover bg-center pt-20 bg-[url('https://www.bettycrocker.lat/mx/wp-content/uploads/sites/2/2020/12/BCmexico-recipe-cupcakes-de-arcoiris.png')]"
      >
        {/* Capa semitransparente encima de la imagen */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>

        {/* Contenido del Hero */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-3xl px-8 text-left text-white">
          <h1 className="text-5xl font-bold">Dulces momentos, sabores inolvidables</h1>
          <p className="mt-4 text-lg text-gray-200">
            Descubre nuestra exquisita selección de pasteles, cupcakes y chocolates artesanales elaborados con los mejores ingredientes.
          </p>
        </div>
      </section>
     
     </>
    );
  };
  
  export default HeroSection;
  