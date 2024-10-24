"use client";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="max-w-[1440px] w-full flex justify-center mx-auto">
      <nav className="max-w-[1236px] w-full px-[10px] h-[68px] flex justify-between items-center">
        <div className="w-[170px]">
          <p>FAST UI</p>
        </div>
        <ul className="flex max-w-[500px] w-full rounded-[20px] justify-center items-center gap-x-[47px] h-[68px] bg-[#FFFFFF]">
          <Link className="active:text-red-600" href={"/"}>
            Home
          </Link>
          <Link className="active:text-red-600" href={"/about"}>
            About
          </Link>
          <Link className="active:text-red-600" href={"/howitworks"}>
            How it Works
          </Link>
          <Link className="active:text-red-600" href={"/services"}>
            Services
          </Link>
        </ul>
        <div className="flex gap-">
          <Link href={"/signin"}>
            <button>Sign In</button>
          </Link>
          <Link href={"/signup"}>
            <button>Sign Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
