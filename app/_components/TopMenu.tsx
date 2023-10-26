"use client";

import { TMenu } from "@/app/_types/TMenu";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems: TMenu = [
  { id: "about", label: "O nama", href: "/about" },
  { id: "treatmants", label: "Tretmani", href: "/treatmants" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "price-list", label: "Cjenik", href: "/price-list" },
  { id: "contact", label: "Kontakt", href: "/contact" },
];

const TopMenu = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu((prev) => !prev);

  return (
    <nav className="flex-wrap lg:flex items-center justify-between bg-white w-full">
      <div className="container max-w-screen-lg m-auto flex justify-between w-full p-4 py-2 lg:py-4 flex-col lg:flex-row">
        <div className="flex items-center justify-between lg:mb-0">
          <Link href="/">
            <Image
              src="assets/image/navbar-logo.svg"
              alt="Logo"
              width="50"
              height="50"
            />
          </Link>

          <button
            onClick={handleShowMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-900 rounded-md outline-none lg:hidden ml-auto"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-20">
          {menuItems.map(({ id, label, href }) => (
            <li
              key={id}
              className={`font-medium text-lg text-primary hover:text-primary-hover transition ease-in-out duration-300 mb-5 py-2 px-4 lg:mb-0 ${
                pathname === href ? "border border-primary rounded-lg" : ""
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        {showMenu && (
          <ul className="flex lg:hidden flex-col items-center">
            {menuItems.map(({ id, label, href }) => (
              <li
                key={id}
                className={`font-medium text-lg text-primary hover:text-primary-hover transition ease-in-out duration-300 mb-5 py-2 px-4 lg:mb-0 ${
                  pathname === href ? "border border-primary rounded-lg" : ""
                }`}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default TopMenu;
