import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-2 mt-5 border-b-2 pb-7 sm:px-4">
      <Link href="/" className="flex space-x-3">
        <h1 className="ml-2 text-xl font-bold tracking-tight sm:text-xl">
          Business Continuity Plan Management
        </h1>
      </Link>
    </header>
  );
}
