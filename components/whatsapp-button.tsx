"use client";

import { MessageCircle } from "lucide-react";
import { WhatsAppModal } from "./whatsapp-modal";
import { useWhatsApp } from "./whatsapp-context";

export function WhatsAppButton() {
  const { openModal } = useWhatsApp();

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={openModal}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999,
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </button>

      {/* WhatsApp Modal */}
      <WhatsAppModal />
    </>
  );
}
