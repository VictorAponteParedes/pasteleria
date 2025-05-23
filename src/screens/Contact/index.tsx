import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importamos íconos para usar

const Contact = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      {/* Título y subtítulo */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold ">¡Contáctanos!</h2>
        <p className="mt-4 text-lg text-gray-600">
          ¿Tienes alguna pregunta o quieres hacer un pedido especial? Estamos
          aquí para ayudarte.
        </p>
      </div>

      {/* Sección dividida en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center text-center md:text-left">
        {/* Columna 1: Información de Contacto */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">
            Información de Contacto
          </h3>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <FaMapMarkerAlt className="text-pink-400 mr-2" />
            <span className="text-lg text-gray-800">Tenemos delivery</span>
          </div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <FaPhoneAlt className="text-pink-400 mr-2" />
            <span className="text-lg text-gray-800">(+595) 986 614 340</span>
          </div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <FaEnvelope className="text-pink-400 mr-2" />
            <span className="text-lg text-gray-800">
              salinasgonzalezagata@gmail.com
            </span>
          </div>
        </div>

        {/* Columna 2: Horarios de Atención */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">
            Horarios de Atención
          </h3>
          <div className="text-lg text-gray-800">
            <p>Martes: 9:00 hs - 12:00 HS</p>
            <p>Jueves: 10:00 AM - 14:00 HS</p>
            <p>Sabado: 11:00 AM - 13:30 HS</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
