import React from 'react';
import MenuItem from '../../components/menu';

const Menus = () => {
  return (
    <div className="py-16 px-6">
      {/* Título de la sección */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Nuestro Menú</h2>
        <p className="mt-4 text-lg text-gray-600">
          Explora nuestra variedad de delicias dulces y saladas para todos los gustos
        </p>
      </div>

      {/* Menú Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {/* Usamos el componente MenuItem y pasamos las propiedades */}
        <MenuItem
          title="Cupcake Arcoíris"
          price="$120"
          description="Deliciosos cupcakes artesanales para endulzar tu día."
        />
        <MenuItem
          title="Pastel de Chocolate"
          price="$150"
          description="Un pastel de chocolate suave y delicioso, perfecto para cualquier ocasión."
        />
        <MenuItem
          title="Tarta de Fresa"
          price="$100"
          description="Una tarta fresca y frutal que te hará disfrutar de un dulce momento."
        />
        <MenuItem
          title="Galletas de Avena"
          price="$80"
          description="Galletas saludables y sabrosas, perfectas para una merienda."
        />
      </div>
    </div>
  );
};

export default Menus;
