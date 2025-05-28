"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function NavLink(
  props: Omit<ComponentProps<typeof Link>, "className">
) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "hover:text-orange-dark lg:p-4 uppercase text-sm tracking-widest",
        pathname === props.href &&
          "text-orange-dark text-gray-strong lg:text-primary-foreground"
      )}
    />
  );
}
