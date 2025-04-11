"use client"
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HomeNavbar() {
  const pathName = usePathname()
  console.log(pathName,'pathName')
  const navLinks=[
    {
      title:"Dashboard",
      href:"/dashboard/home/overview"
    },
    {
      title:"Getting Started",
      href:"/dashboard/home/getting-started"
    },
    {
      title:"Recents Updated",
      href:"/dashboard/home/updates"
    },
    {
      title:"Announcements",
      href:"/dashboard/home/announcement"
    },

  ]
  return (
    <div className="h-32 p-5 bg-slate-50 border-b-1 border-slate-300">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 bg-white rounded-lg justify-center items-center">
          <Building2 />
        </div>
        <div className="flex flex-col">
            <p className="text-slate-900 font-semibold">Hello JB Developer</p>
            <span className="text-sm">Garat</span>
        </div>
      </div>
      <nav className="sticky mt-6 flex space-x-4">
        {
          navLinks.map((item,i)=>{
            return(
              <Link key={i} href={item.href} className={`${pathName == item.href ? "py-1 border-b-2 border-blue-600" : "py-1"}`}>{item.title}</Link>
            )
          })
        }
      </nav>
    </div>
  );
}
