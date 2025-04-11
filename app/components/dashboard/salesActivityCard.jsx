"use client";
import { Check, CheckCircle2, CreditCard, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SalesActivityCard({items}) {
  return (
    <div>
      <Link
        href={items.href}
        // key={i}
        className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4
          cursor-pointer flex items-center flex-col gap-3 transition-all duration-300"
      >
        <h4 className={`${items.color + " font-semibold text-3xl"}`}>
          {items.number}
        </h4>
        <small className="text-slate-500">{items.unit}</small>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4" />
          <span className="uppercase text-xs">{items.title}</span>
        </div>
      </Link>
    </div>
  );
}
