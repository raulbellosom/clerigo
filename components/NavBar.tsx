"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconBadge } from "./icon-badge";
import { Menu } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

interface NavbarProps {
  showSidebar: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ showSidebar }) => {
  return (
    <header>
      <div className="p-4 border-b h-full flex items-center  shadow-sm bg-clerigo-200">
        <div className="hidden md:block cursor-pointer" onClick={showSidebar}>
          <IconBadge icon={Menu} size="md" />
        </div>
        <MobileSidebar />
      </div>
    </header>
  );
};

export default Navbar;
