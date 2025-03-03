import React from "react";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Imagen */}
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      {/* Contenido de la card */}
      <div className="px-6 py-4">
        {/* Titulo y subtitulo */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>

        {/* Precio y botón */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">{price}</span>
          <button className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition duration-300">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
