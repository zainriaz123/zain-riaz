"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(" fixed top-10 inset-x-0 max-w-2xl mx-auto z-50" )}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        <Link href="/Home" onClick={() => setActive("Home")}>Home</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <Link href="/Our Courses" onClick={() => setActive("Our Courses")}>Our Courses</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        <Link href="/Contact" onClick={() => setActive("Contact")}>Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
