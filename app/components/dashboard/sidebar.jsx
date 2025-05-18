"use client";
import Home from "@/app/page";
import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  File,
  Files,
  House,
  PlusCircle,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import SubscriptionCard from "./subscriptionCard";
import DropDown from "./sideBarDropDown/sideBarDropDown";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  useEffect(() => {
    initFlowbite();
  });
  const pathName = usePathname()
  const inventoryDropDowns = [
    {
      title: "Items",
      href: "/dashboard/inventory/items/new",
      // icon:<PlusCircle className="w-4 h-4"/>
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories/new",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brand/new",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units/new",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse/new",
    },
    {
      title: "Inventory Adjustment",
      href: "/dashboard/inventory/adjustment",
    },
  ];
  const salesLink = [
    {
      title: "Customer",
      href: "/dashboard/inventory/adjustment",
    },
    {
      title: "Sales Order",
      href: "/dashboard/inventory/items",
      // icon:<PlusCircle className="w-4 h-4"/>
    },
    {
      title: "Packages",
      href: "/dashboard/inventory/itemsGroup",
    },
    {
      title: "Shipments",
      href: "/dashboard/inventory/itemsGroup",
    },
    {
      title: "Inovice",
      href: "/dashboard/inventory/itemsGroup",
    },
    {
      title: "Sales Receipt",
      href: "/dashboard/inventory/itemsGroup",
    },
    {
      title: "Sales Returns",
      href: "/dashboard/inventory/itemsGroup",
    },
    {
      title: "Credit Notes",
      href: "/dashboard/inventory/itemsGroup",
    },
  ];
  console.log('pathname',pathName)
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
        <nav className="flex flex-col gap-3 px-3 py-6 h-100">
          <Link
            href="/dashboard/home/overview"
            // className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
            className={`${
              pathName == '/dashboard/home/overview' ? 'flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md' : "flex  items-center space-x-2 text-slate-50 p-2 rounded-md"
            }`}
          >
            <House className="w-4 h-4" />
            <span>Home</span>
          </Link>
          {/* <button  > */}

          {/* <span>Inventory</span> */}
          <DropDown
            title="Inventory"
            href="/dashboard/inventory"
            items={inventoryDropDowns}
            icon={BaggageClaim}
          />
          {/* </button> */}
          {/* <button className="flex items-center space-x-2 p-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Sales</span>
          </button> */}
          <DropDown
            title="Sales"
            href="/dashboard/sales"
            items={salesLink}
            icon={ShoppingCart}
          />
          {/* <button className="flex items-center space-x-2 p-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Purchases</span>
          </button> */}
          <DropDown
            title="Purchases"
            href="/dashboard/sales"
            items={salesLink}
            icon={ShoppingCart}
          />

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
        <SubscriptionCard />
      </div>
      <div className="flex flex-col">
        <button className="flex space-x-2 items-center justify-center bg-slate-950 py-3 px-2">
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
