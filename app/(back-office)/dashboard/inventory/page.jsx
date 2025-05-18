import FixedHeader from "@/app/components/dashboard/FixedHeader";
import FormHeader from "@/app/components/dashboard/formHeader";
import Card from "@/app/components/formInputs/optionsCards/Card";
import { Boxes, Component, Diff, LayoutGrid, LayoutPanelTop, Scale, ScrollText, Shirt, Slack, Warehouse } from "lucide-react";

export default function Inventory() {
  const optionsCard = [
    // {
    //   title: "Items Group",
    //   description:
    //     "Create multiple variants of the same item using Item Groups",
    //   link: "/new",
    //   linkTitle: "New Item Group",
    //   enabled: true,
    //   icon: Boxes,
    // },
    {
      title: "Items",
      description:
        "Create stand alone items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: LayoutGrid,
    },
    {
      title: "Categories",
      description: "Bundle different items together and sell them as kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Categories",
      enabled: false,
      icon: LayoutPanelTop,
    },
    {
      title: "Brands",
      description:
        "Tweak your item prices for specific contacts or tranactions",
      link: "/dashboard/inventory/brand/new",
      linkTitle: "New Brands",
      enabled: true,
      icon: Slack,
    },
    {
      title: "Warehouse",
      description:
        "Tweak your item prices for specific contacts or tranactions",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Units",
      description:
        "Tweak your item prices for specific contacts or tranactions",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: Scale,
    },
    {
      title: "Inventory Adjustment",
      description: "Transfer Stock From The Main Warehouse",
      link: "/dashboard/inventory/adjustment/new",
      linkTitle: "New Adjustment",
      enabled: false,
      icon: Diff,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 px-16 gap-6">
        {optionsCard.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </div>
  );
}
