"use client";
import { Check, CheckCircle2, CreditCard, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import InventorySummaryCard from "./inventorySummaryCard";
import SalesActivityCard from "./salesActivityCard";

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be Delivered",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-300",
    },
    {
      title: "To be Invoiced",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-orange-300",
    },
  ];
  const inventorySummary = [
    {
      title: "Quantity in Hand",
      number: 10,
    },
    {
      title: "Quantity to be received",
      number: 0,
    },
  ];
  return (
    <div className="bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4">
      <div className="col-span-8 border-r border-slate-300 p-8">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className=" grid grid-cols-4 gap-3 pr-8">
          {salesActivity.map((items, i) => {
            return <SalesActivityCard items={items} key={i} />;
          })}
        </div>
      </div>
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div>
          {inventorySummary.map((items, i) => {
            return (
              <InventorySummaryCard items={items} key={i}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}
