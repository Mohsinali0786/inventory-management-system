"use client";
import {
  CreditCard,
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FixedHeader() {
  return (
    <div className="flex justify-between items-center bg-white py-5 px-4">
      <button className="text-2xl">All Items</button>
      <div className="flex gap-4">
        <Link
          href="#"
          className="p-1 rounded-sm bg-blue-600 px-3 px-4 flex items-center space-x-2 text-white"
        >
          <Plus className="w-4 h-4" />
          <span>New</span>
        </Link>
        <div className="flex">
          <button>
            <List />
          </button>
          <button>
            <LayoutGrid />
          </button>
        </div>
        <button>
          <MoreHorizontal />
        </button>
        <button>
          <HelpCircle />
        </button>
      </div>
    </div>
  );
}
