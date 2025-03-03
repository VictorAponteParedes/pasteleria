
import Card from "../../components/card";

const Products = () => {

    return (
        <>
           {/* Título de la sección de productos */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-gray-800">Mis Productos</h2>
      </div>

      {/* Contenedor de las cards, organizadas en una fila */}
      <div className="p-6 flex flex-wrap justify-center gap-6">
        {/* Cards */}
        <Card
          image="https://cdn0.uncomo.com/es/posts/4/4/5/como_hacer_bombones_de_chocolate_23544_600.jpg"
          title="Bombones de Chocolate"
          subtitle="Deliciosos bombones de chocolate"
          price="$104"
        />
        <Card
          image="https://i0.wp.com/sarasellos.com/wp-content/uploads/2024/05/cupcakes-vainilla-1.jpg?resize=779%2C779&ssl=1"
          title="Cupcake Arcoíris"
          subtitle="Deliciosos cupcakes artesanales"
          price="$120"
        />
        <Card
          image="https://www.goya.com/media/7397/coquito-cupcakes.jpg?quality=80"
          title="Cupcake Arcoíris"
          subtitle="Deliciosos cupcakes artesanales"
          price="$120"
        />
        <Card
          image="https://www.infobae.com/new-resizer/GdHF_8zFFB398uzZ5hdr48308Vo=/arc-anglerfish-arc2-prod-infobae/public/2ZHRJJKL32C3XXPY2XL4K2P6L4.jpg"
          title="Cupcake Arcoíris"
          subtitle="Deliciosos cupcakes artesanales"
          price="$120"
        />
      </div>
        </>
    )
}

export default Products;