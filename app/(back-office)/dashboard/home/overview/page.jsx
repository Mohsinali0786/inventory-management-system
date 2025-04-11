import DashboardBanner from "@/app/components/dashboard/dashboardBanner";
import SalesOverview from "@/app/components/dashboard/salesOverview";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      <DashboardBanner/>
      <SalesOverview/>
      {/* <h2>Dashboard</h2> */}
    </div>
  );
}
