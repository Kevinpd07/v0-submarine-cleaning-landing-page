"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WhatsAppContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <WhatsAppContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider");
  }
  return context;
}
