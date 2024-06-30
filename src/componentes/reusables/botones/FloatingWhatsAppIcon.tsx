
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppIcon = () => {
  return (
    <a
      href="https://www.whatsapp.com/?lang=es_LA"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-200"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default FloatingWhatsAppIcon;
