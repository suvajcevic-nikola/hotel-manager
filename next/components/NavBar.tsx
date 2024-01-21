"use client";

import React from "react";
import Link from "next/link";
import { NavItem, navData } from "@/constants/navbar";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BuildingOffice2Icon } from "@heroicons/react/20/solid";

type NavLinkProps = NavItem & {
  currentPath: string;
};

const NavLink = ({ name, path, currentPath }: NavLinkProps) => {
  const isActive = currentPath === path;

  return (
    <Link
      href={path}
      className={clsx(
        "p-2 hover:text-white",
        isActive ? "text-white" : "text-rose-200",
      )}
    >
      {name}
    </Link>
  );
};

const NavBar = () => {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = React.useState(false);

  const switchMenuVisibility = () => {
    setIsOpen((currentState) => !currentState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className="z-40 relative h-full w-full">
      <div className="absolute flex w-full min-w-[220px] flex-col rounded-lg bg-rose-500 px-6 py-4 shadow-md ring-[1px] ring-rose-400">
        <div className="flex w-full items-center justify-between gap-4">
          <Link href="/" className="flex gap-2 text-lg font-bold text-white">
            <BuildingOffice2Icon className="h-6 w-6 text-white" />
            <span>HotelManager</span>
          </Link>
          <button
            onClick={switchMenuVisibility}
            className="flex items-center rounded-full p-2 shadow-xl hover:bg-rose-400"
          >
            <Bars3Icon className="h-4 w-4 text-rose-100 hover:text-white" />
          </button>
        </div>
        {isOpen && (
          <nav onClick={closeMenu} className="flex w-full max-w-full flex-col gap-2 pt-4 text-sm">
            {navData.map((item) => (
              <NavLink key={item.name} {...item} currentPath={currentPath} />
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default NavBar;
