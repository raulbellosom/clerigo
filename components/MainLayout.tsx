"use client";
import { useState } from "react";
import Navbar from "./NavBar";
import SideBar from "./Sidebar";
import { cn } from "@/lib/utils";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [openSidebar, setSidebar] = useState<boolean>(true);
  const showSidebar = () => {
    setSidebar((currentVal) => !currentVal);
  };
  return (
    <div className="h-full">
      <div
        className={cn(
          "h-[80px] fixed inset-y-0 w-full",
          openSidebar ? "md:pl-56 " : ""
        )}
      >
        <Navbar showSidebar={showSidebar} />
      </div>
      {openSidebar && (
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 bg-white">
          <SideBar />
        </div>
      )}
      {/* This component is to display the content of all the site */}
      <main
        className={cn(" pt-[80px] h-[100vh]", openSidebar ? "md:pl-56" : "")}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
