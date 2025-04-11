import HomeNavbar from "@/app/components/dashboard/homeNavbar";


export default function Layout({ children }) {
  console.log('children', children)
  return (
    <div className="">
        <HomeNavbar/>
        {children}
    </div>
  );
}
