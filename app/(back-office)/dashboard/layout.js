import Header from "@/app/components/dashboard/header";
import Sidebar from "@/app/components/dashboard/sidebar";
import Image from "next/image";

export default function Layout({ children }) {
  console.log('children', children)
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-60 min-h-screen w-full bg-slate-100">
        <Header />
        {children}
      </main>
    </div>
  );
}
