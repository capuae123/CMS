"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen px-4 md:px-10 bg-[#F4F6FA]">
      <header className="bg-[#F4F6FA] text-black p-4 flex justify-between items-center">
        <div className="text-2xl md:text-4xl font-bold">Website</div>
        <div className="flex items-center space-x-4"></div>
      </header>
      <nav className="bg-[#F4F6FA] p-4 relative">
        <div className="flex flex-wrap space-x-2 md:space-x-4">
          <span className="flex gap-2 md:gap-3 border-b-2 border-gray-300 w-full md:w-auto">
            {["/overview", "/blogs", "/media", "/trash"].map((path) => (
              <Link
                key={path}
                href={path}
                className={`relative pb-2 ${
                  pathname === path
                    ? "font-bold text-black"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                {pathname === path && (
                  <span className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-blue-600"></span>
                )}
              </Link>
            ))}
          </span>
        </div>
      </nav>
      <main className="p-4 bg-[#F4F6FA]">{children}</main>
    </div>
  );
};

export default Layout;
