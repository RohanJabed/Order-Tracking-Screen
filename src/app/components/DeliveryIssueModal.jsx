"use client";
import React, { useState } from 'react';

const DeliveryIssueModal = ({ label = "Report Delivery Issue" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full border border-zinc-200 text-zinc-700 py-3 rounded-xl font-semibold text-sm"
      >
        {label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-6 w-80 flex flex-col gap-4">
            <h2 className="text-base font-bold text-zinc-800">Report Delivery Issue</h2>
            <p className="text-sm text-zinc-500">
              We've logged your report. Our team will investigate with FedEx and follow up within 24 hours via email.
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

export default DeliveryIssueModal;
