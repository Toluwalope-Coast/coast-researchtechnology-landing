import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 text-primary-text-color flex-shrink-0">
      <div>
        <Image
          src="/coastresearch.svg"
          alt="Coast Research Technology Brand Logo"
          width={200}
          height={200}
        />
        {/* <p className="p-4 font-bold text-md leading-none">
          Coast
          <br />
          Research
          <br />
          Technology
        </p> */}
      </div>
      <nav className="flex flex-col mt-10">
        <Link href="/dashboard" className="p-2 hover:bg-white">
          Home
        </Link>
        <Link href="/profile" className="p-2 hover:bg-white">
          Profile
        </Link>
        <Link href="/settings" className="p-2 hover:bg-white">
          Settings
        </Link>
      </nav>
    </aside>
  );
};
