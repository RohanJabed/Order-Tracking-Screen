"use client";
import React from 'react';
import { FiArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft';
import { FiPackage } from '@react-icons/all-files/fi/FiPackage';
import { GiRunningShoe } from '@react-icons/all-files/gi/GiRunningShoe';
import { FaCircleCheck } from "react-icons/fa6";
import ContactSupportModal from './ContactSupportModal';
import DeliveryIssueModal from './DeliveryIssueModal';

const steps = [
  { label: "Order Placed", date: "Sep 15", done: true },
  { label: "Processing", date: "Sep 16", done: true },
  { label: "Shipped", date: "Sep 17", done: true },
  { label: "Out for Delivery", date: "Sep 19", done: true },
  { label: "Delivered", date: "Sep 20", done: true, active: true },
];

const NotReceivedCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl shadow-lg bg-white">

      {/* Header */}
      <div className="bg-indigo-600 px-5 py-5 rounded-t-2xl">
        <button className="text-white text-sm mb-3 flex items-center gap-1">
          <FiArrowLeft /> <span className="font-semibold text-lg ml-1">Order Tracking</span>
        </button>
        <div className="flex items-center justify-between mt-1">
          <div>
            <p className="text-indigo-200 text-xs">Order ID</p>
            <p className="text-white font-bold text-base">#ORD-847291</p>
          </div>
          <span className="bg-red-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Not Received
          </span>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-5">

        {/* Alert */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-700 font-semibold text-sm flex items-center gap-2">
            <FiPackage className="text-red-700" /> Package Not Received
          </p>
          <p className="text-red-600 text-xs mt-1">
            Our system marked this order as delivered on <strong>Sep 20</strong>, but you reported not receiving it. We will investigate right away.
          </p>
        </div>

        {/* Delivery Info */}
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-zinc-400">Delivered On</p>
            <p className="text-red-500 font-semibold text-sm">Sep 20, 2025</p>
            <p className="text-red-400 text-xs">Not confirmed by customer</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-zinc-400">Carrier</p>
            <p className="font-semibold text-sm">FedEx</p>
            <p className="text-zinc-400 text-xs">7489 2341 8823</p>
          </div>
        </div>

        {/* Delivery Progress */}
        <div>
          <p className="text-xs font-semibold text-zinc-400 tracking-widest mb-3">DELIVERY PROGRESS</p>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 flex items-center justify-center z-10">
                    <FaCircleCheck size={22} className={step.active ? "text-red-500" : "text-indigo-600"} />
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 h-6 bg-indigo-600" />}
                </div>
                <div className="pb-2">
                  <p className={`text-sm font-medium ${step.active ? "text-red-500" : "text-zinc-800"}`}>
                    {step.label}
                  </p>
                  {step.date && <p className="text-xs text-zinc-400">{step.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <p className="text-xs font-semibold text-zinc-400 tracking-widest mb-3">ORDER SUMMARY</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-lg"><GiRunningShoe /></div>
              <div>
                <p className="text-sm font-semibold">Nike Air Max 270</p>
                <p className="text-xs text-zinc-400">Black / Size 10</p>
                <p className="text-xs text-zinc-400">Qty: 1</p>
              </div>
            </div>
            <p className="font-bold text-sm">$129.99</p>
          </div>
        </div>

        {/* Actions */}
        <ContactSupportModal label="I Didn't Receive My Order" />
          <DeliveryIssueModal label="Report Missing Package" />

        <p className="text-center text-xs text-zinc-400">
          Need help?{" "}
          <a href="#" className="text-indigo-600 font-medium">Visit Help Center</a>
        </p>

      </div>
    </div>
  );
};

export default NotReceivedCard;
