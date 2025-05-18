import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  User2,
  Users,
} from "lucide-react";
import SearchInput from "./searchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200">
      <div className="flex gap-3">
        <button>
          <History />
        </button>
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative group flex items-center justify-center">
          <div className="pr-2 border-r border-gray-300">
            <button className="bg-blue-600 text-white p-1 rounded-lg">
              <Plus className="text-slate-50 w-4 h-4" />
            </button>
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden w-max bg-gray-900 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity">
              Setting
            </span>
          </div>
          <div className="flex border-r border-gray-300 space-x-2">
            <button className="text-white p-1 rounded-lg hover:bg-slate-200">
              <Users className="text-slate-900 w-4 h-4" />
            </button>
            <button className="text-white p-1 rounded-lg hover:bg-slate-200">
              <Bell className="text-slate-900 w-4 h-4" />
            </button>
            <button className="text-white p-1 rounded-lg hover:bg-slate-200">
              <Settings className="text-slate-900 w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center">
              <span>Garat</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <button>
                <Image width={96} height={96} className="rounded-full w-9 h-9 border border-salte-800" alt="user image" src="/"/>
            </button>
            <button className="flex items-center">
              <LayoutGrid className="w-6 h-6 text-slate-900" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
