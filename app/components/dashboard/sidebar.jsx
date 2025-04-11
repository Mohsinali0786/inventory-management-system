import Home from "@/app/page";
import { BaggageClaim, BarChart4, Cable, ChevronLeft, File, Files, House, ShoppingCart } from "lucide-react";
import Link from "next/link";
import SubscriptionCard from "./subscriptionCard";

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50  fixed">
      <div className="flex flex-col">
        <Link
          href=""
          className="flex space-x-2 items-center bg-slate-950 py-3 px-2"
        >
          <ShoppingCart />
          <span className="text-xl font-semibold">Inventory</span>
        </Link>
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link href="#" className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md">
            <House className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <button  className="flex items-center space-x-2 p-2">
            <BaggageClaim className="w-4 h-4" />
            <span>Inventory</span>
          </button>
          <button  className="flex items-center space-x-2 p-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Sales</span>
          </button>
          <button  className="flex items-center space-x-2 p-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          <Link href="" className="flex items-center space-x-2 p-2">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          <Link href="" className="flex items-center space-x-2 p-2">
            <BarChart4 className="w-4 h-4" />
            <span>Reports</span>
          </Link>
          <Link href="" className="flex items-center space-x-2 p-2">
            <File className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
        <SubscriptionCard/>
      </div>
      <div className="flex flex-col">
        <button className="flex space-x-2 items-center justify-center bg-slate-950 py-3 px-2">
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
