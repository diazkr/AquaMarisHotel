"use client"
import ChatModal from "@/componentes/chatbot/ChatModal";
import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

const FloatingWhatsAppIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className="fixed bottom-4 right-4 animate-gradient text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:cursor-pointer transition-transform duration-200 transform hover:scale-110"

      >
        <FaRobot size={24} />
      </div>
      <ChatModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default FloatingWhatsAppIcon;
