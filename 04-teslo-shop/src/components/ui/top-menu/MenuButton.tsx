"use client";

import { useUIStore } from "@/store";

export const MenuButton = () => {
  const openSideMenu = useUIStore((s) => s.openSideMenu);
  return (
    <button
      type="button"
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
      onClick={openSideMenu}
    >
      Menú
    </button>
  );
};
