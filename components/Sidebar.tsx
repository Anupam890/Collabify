import React from "react";
import { CreateNew } from "./CreateNew";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Sidebar = () => {
  const menuOptions = (
    <>
    <CreateNew/>
    </>
  );
  return (
    <div className="bg-gray-400 p-4 ">
      <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon
          className="p-2 hover:opacity-30 rounded-lg" size={40}
          />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
           <div>
            {menuOptions}
           </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>

      <div className="hidden md:inline">
       {menuOptions}
      </div>
    </div>
  );
};

export default Sidebar;
