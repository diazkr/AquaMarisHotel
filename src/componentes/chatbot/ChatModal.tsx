// components/ChatModal.tsx
import React from "react";
import ChatInterface from "./ChatInterface";
import { Modal } from "@mantine/core";
import Image from "next/image";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src="/logos/logo.svg" alt="Logo" width={120} height={120}/>
        </div>
      }
      size="lg"
      centered
      className="p-1"
    >
      <ChatInterface />
    </Modal>
  );
};

export default ChatModal;
