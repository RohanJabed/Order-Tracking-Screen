"use client";
import React from 'react';
import { FiArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft';
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
import { GiRunningShoe } from '@react-icons/all-files/gi/GiRunningShoe';
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import ContactSupportModal from './ ContactSupportModal';
import DeliveryIssueModal from './DeliveryIssueModal';

const checklist = [
  { label: "Order Confirmed", done: true },
  { label: "Payment Processed", done: true },
  { label: "Preparing for Shipment", done: true },
  { label: "Handed to Carrier", done: false },
  { label: "Tracking Number Assigned", done: false },
];

const NoTrackingCard = () => {
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
          <span className="bg-zinc-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
            No Tracking
          </span>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-5">

        {/* Alert */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
          <p className="text-zinc-700 font-semibold text-sm flex items-center gap-2">
            <FiSearch className="text-zinc-600" /> Tracking Not Available Yet
          </p>
          <p className="text-zinc-500 text-xs mt-1">
            Your order exists and is being processed. Tracking info will appear here once your package is picked up by the carrier.
          </p>
        </div>

        {/* Delivery Info */}
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-zinc-400">Estimated Delivery</p>
            <p className="text-indigo-500 font-semibold text-sm">Sep 25, 2025</p>
            <p className="text-zinc-400 text-xs">Awaiting shipment</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-zinc-400">Carrier</p>
            <p className="font-semibold text-sm">TBD</p>
            <p className="text-zinc-400 text-xs">Not yet assigned</p>
          </div>
        </div>

        {/* Order Status Checklist */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-zinc-400 tracking-widest">ORDER STATUS</p>
          {checklist.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {item.done
                ? <FaCircleCheck size={20} className="text-indigo-600 shrink-0" />
                : <FaRegCircle size={20} className="text-zinc-300 shrink-0" />
              }
              <p className={`text-sm font-medium ${item.done ? "text-zinc-800" : "text-zinc-400"}`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <p className="text-xs font-semibold text-zinc-400 tracking-widest mb-3">ORDER SUMMARY</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-lg">
                <GiRunningShoe />
              </div>
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
         <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors">
            Notify Me When Shipped
         </button>
          <button className="w-full border border-zinc-200 text-zinc-700 py-3 rounded-xl font-semibold text-sm hover:bg-zinc-50 transition-colors">
            Check Back Later
          </button>

        <p className="text-center text-xs text-zinc-400">
          Need help?{" "}
          <a href="#" className="text-indigo-600 font-medium">Visit Help Center</a>
        </p>

      </div>
    </div>
  );
};

export default NoTrackingCard;
