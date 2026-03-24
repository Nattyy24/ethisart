import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/" className="text-2xl font-bold">Ethisart</Link>
      <div className="flex items-center gap-4">
        <Link href="/search">Search</Link>
        <Link href="/dashboard">Dashboard</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}