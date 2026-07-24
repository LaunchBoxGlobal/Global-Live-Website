"use client";
import React from "react";
import DiscoveryCallForm from "./DiscoveryCallForm";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <main
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-5 py-10"
      style={{ scrollbarWidth: "none" }}
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center">
        <div onClick={(e) => e.stopPropagation()}>
          <DiscoveryCallForm onClose={onClose} />
        </div>
      </div>
    </main>
  );
};

export default ContactModal;
