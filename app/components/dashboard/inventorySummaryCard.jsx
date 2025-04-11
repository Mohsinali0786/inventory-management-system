"use client";
import { Check, CheckCircle2, CreditCard, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function InventorySummaryCard({ items }) {
  return (
    <div
      className="mb-4 shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-4 py-2
          cursor-pointer flex items-center  gap-3 justify-between transition-all duration-300"
    >
      <h2 className="text-slate-500 uppercase text-sm">{items.title}</h2>
      <h4 className="text-2xl">{items.number}</h4>
    </div>
  );
}
