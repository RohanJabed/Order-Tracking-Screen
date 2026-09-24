"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Delayed", href: "/Delayed" },
  { label: "Not Received", href: "/NotReceived" },
  { label: "No Tracking", href: "/NotTracking" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center py-6 bg-zinc-100">
      <div className="flex items-center gap-1 bg-white rounded-2xl px-2 py-2 shadow-sm">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-colors ${
              pathname === tab.href
                ? "bg-indigo-600 text-white"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
