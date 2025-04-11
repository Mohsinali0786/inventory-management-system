"use client"
import { CreditCard, X } from "lucide-react";
import { useState } from "react";

export default function DashboardBanner() {
    const [hidden , setHidden] = useState(false)
  return (
    <div className={`${hidden ? "hidden" : "flex justify-between items-center py-6 px-16 bg-white gap-4 grid grid-cols-12 relative"}`}>
      <div className="col-span-3">
        <CreditCard className="w-16 h-16 text-slate-500" />
      </div>
      <div className="col-span-6">
        <h2 className="font-bold text-2xl">Start accepting online payments</h2>
        <p>
          Business are moving toward online payments as they are easy, secure
          and fast. Try them for your business today.
        </p>
      </div>
      <div className="col-span-3">
        <button className="py-2 px-8 uppercase bg-blue-500 text-white rounded-lg text-sm">
          Enable
        </button>
      </div>
      <div className="absolute top-4 right-16">
        <button onClick={()=>setHidden(true)}>
          <X />
        </button>
      </div>
    </div>
  );
}
