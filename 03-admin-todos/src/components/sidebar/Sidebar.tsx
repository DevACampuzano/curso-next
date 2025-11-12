import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarItem, SidebarItemProps } from "./SidebarItem";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorking,
  IoListOutline,
  IoPersonOutline,
} from "react-icons/io5";
import logo from "@/assets/svg/logo.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogoutButton } from "./LogoutButton";

const menuItem: SidebarItemProps[] = [
  {
    href: "/dashboard",
    text: "Dashboard",
    icon: <IoCalendarOutline size={30} />,
  },
  {
    href: "/dashboard/rest-todos",
    text: "Rest TODOS",
    icon: <IoCheckboxOutline size={30} />,
  },
  {
    href: "/dashboard/server-todos",
    text: "Server Todos",
    icon: <IoListOutline size={30} />,
  },
  {
    href: "/dashboard/cookies",
    text: "Cookies",
    icon: <IoCodeWorking size={30} />,
  },
  {
    href: "/dashboard/products",
    text: "Productos",
    icon: <IoBasketOutline size={30} />,
  },
  {
    href: "/dashboard/profile",
    text: "Perfil",
    icon: <IoPersonOutline size={30} />,
  },
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.name || "Usuario";
  const imageUrl = session?.user?.image || "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png";
  const roles = session?.user?.roles?.join(", ") || [];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r border-gray-400 bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              src={logo}
              className="w-32"
              alt="tailus logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={imageUrl}
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            width={150}
            height={150}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {userName}
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">{roles}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItem.map((item) => (
            <SidebarItem {...item} key={item.href} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-gray-400">
        <LogoutButton />
      </div>
    </aside>
  );
};
