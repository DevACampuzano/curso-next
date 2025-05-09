import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
  IoLogoReact,
} from "react-icons/io5";
import { Props as PropsMenuItem, SibarMenuItem } from "./SibarMenuItem";

const menuItems: PropsMenuItem[] = [
  {
    icon: <IoBrowsersOutline size={40} />,
    path: "/dashboard/main",
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    icon: <IoCalculator size={40} />,
    path: "/dashboard/counter",
    title: "Counter",
    subtitle: "Contador client Side",
  },
  {
    icon: <IoFootball size={40} />,
    path: "/dashboard/pokemons",
    title: "Pokemons",
    subtitle: "Generación Estática",
  },
  {
    icon: <IoHeartOutline size={40} />,
    path: "/dashboard/favorites",
    title: "Favoritos",
    subtitle: "Gobal State",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll no-scrollbar bg-scroll "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Andres Campuzano
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SibarMenuItem {...item} key={item.path} />
        ))}
      </div>
    </div>
  );
};
