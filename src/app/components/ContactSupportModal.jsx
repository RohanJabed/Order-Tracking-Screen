"use client";
import React, { useState } from 'react';

const ContactSupportModal = ({ label = "Contact Support" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-sm"
      >
        {label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-6 w-80 flex flex-col gap-4">
            <h2 className="text-base font-bold text-zinc-800">Contact Support</h2>
            <p className="text-sm text-zinc-500">
              Our support team is available 24/7. You'll be connected to an agent shortly. Average wait time: 2 minutes.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold text-sm"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSupportModal;
