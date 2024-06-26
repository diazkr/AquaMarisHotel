import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaSpotify, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#d9eeec] py-12 text-sm text-[#175358]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-around space-y-8 sm:space-y-0">
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-2">CONTACTO</h3>
            <p className="flex items-center"><FaWhatsapp className="mr-2" /> 300 507 10 00</p>
            <p className="flex items-center"><span className="font-bold mr-2">PBX:</span> 01 8000 41 37 57</p>
            <p>Escríbenos tu PQRS</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-2">QUIÉNES SOMOS</h3>
            <p>Cultura</p>
            <p>Trabaja aquí</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-2">AYUDA</h3>
            <p>Envíos</p>
            <p>Devoluciones y garantías</p>
            <p>Preguntas frecuentes</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-2">SÍGUENOS</h3>
            <div className="flex space-x-4 text-lg">
              <FaWhatsapp />
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaSpotify />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;