"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/app/photos/wonders";
import Image from "next/image";

const NavBar = () => {
  const pathname = usePathname();

  const Links = [
    { title: "home", href: "/" },
    { title: "About", href: "/about" },
    { title: "How it Works", href: "/how-it-works" },
    { title: "Services", href: "/services" },
  ];

  return (
    <div className="max-w-[1440px] w-full flex justify-center mx-auto mt-[10px]">
      <nav className="max-w-[1236px] w-full px-[10px] h-[68px] flex justify-between items-center">
        <div className="min-w-[190px] px-[10px] flex text-[#000000]">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex max-w-[520px] px-[10px] text-center w-full rounded-[20px] justify-center items-center gap-x-[47px] h-[68px] bg-[#FFFFFF] text-[#8987A1]">
          {Links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.title}
                className={
                  isActive
                    ? "text-[#252432] font-bold text-[16px]"
                    : "text-[#8987A1] font-normal"
                }
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-[19px] min-w-[200px]">
          <Link href={"/sign-in"}>
            <button className="text-[#8987A1]">Sign In</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="px-9 py-3 bg-[#4E47FF] text-[#FFFFFF] rounded-[10px]">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
