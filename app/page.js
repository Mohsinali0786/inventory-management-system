import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen flex-col">
      <h2 className="text-3xl mb-4">Inventory Management software</h2>
      <Link href="/dashboard/home/overview">DashBoard</Link>
    </div>
  );
}
