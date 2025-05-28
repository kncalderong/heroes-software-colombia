import React from "react";
import NavLink from "./NavLink";
import MobileSidebar from "./MobileSidebar";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container border-b border-gray-500 justify-between flex px-4 items-center min-h-[90px] ">
        <MobileSidebar>
          <NavLinks />
        </MobileSidebar>
        <Link
          href="/"
          className="flex justify-center items-center md:justify-start md:pl-10 lg:pl-0 grow lg:grow-0"
        >
          <div className="relative w-[145px] h-[25px]">
            <Image
              alt="next-logo"
              src={"/next.svg"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
        <div></div>
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/">Marvel</NavLink>
      <NavLink href="/">Capcom</NavLink>
      <NavLink href="/">Anime</NavLink>
    </>
  );
}
