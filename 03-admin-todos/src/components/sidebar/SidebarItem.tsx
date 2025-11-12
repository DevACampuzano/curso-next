"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}
export const SidebarItem = ({ icon, text, href }: SidebarItemProps) => {
  const path = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${
          href === path
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : ""
        }`}
      >
        {icon}
        <span className="group-hover:text-white-700">{text}</span>
      </Link>
    </li>
  );
};
