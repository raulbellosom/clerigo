import Link from "next/link";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type MenuIem = {
  id: number;
  name: string;
  icon: string;
  href: string;
  allowedRoles: [];
  disabled: boolean;
  subItems?: MenuIem[] | undefined;
};

const SideBar = () => {
  const sideBarItems: MenuIem[] = [
    {
      id: 1,
      name: "Perfil",
      icon: "",
      href: "/profile",
      allowedRoles: [],
      disabled: false,
    },
    {
      id: 2,
      name: "Roles",
      icon: "",
      href: "/roles",
      allowedRoles: [],
      disabled: false,
    },
    {
      id: 3,
      name: "Cátalogos",
      icon: "",
      href: "/profile",
      subItems: [
        {
          id: 1,
          name: "Diosesis",
          icon: "",
          href: "/catalogs/diosesis",
          allowedRoles: [],
          disabled: false,
        },
        {
          id: 2,
          name: "Zonas Pastorales",
          icon: "",
          href: "/catalogs/pastoralzone",
          allowedRoles: [],
          disabled: false,
        },
        {
          id: 3,
          name: "Decanatos",
          icon: "",
          href: "/catalogs/decanatos",
          allowedRoles: [],
          disabled: false,
        },
      ],
      allowedRoles: [],
      disabled: false,
    },
  ];
  return (
    <aside
      className="h-full
    border-r
    flex
    flex-col
    overflow-y-auto
    shadow-sm"
    >
      {/* <div className="p-6">
        <Logo />
      </div> */}
      <div className="flex flex-col w-full">
        {/* <SidebarRoutes /> */}
        <Accordion type="single" collapsible>
          {sideBarItems?.length > 0 &&
            sideBarItems.map((p) => (
              <AccordionItem key={p.id} value={p.name}>
                <AccordionTrigger
                  hidden={p?.subItems && p?.subItems?.length > 0 ? false : true}
                >
                  <Link href={p.href} className="w-full text-start h-full">
                    {p.name}
                  </Link>
                </AccordionTrigger>
                {p?.subItems && p?.subItems?.length > 0 && (
                  <>
                    {p.subItems.map((subItem: any) => (
                      <AccordionContent key={subItem.name} className="flex">
                        <Link href={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </AccordionContent>
                    ))}
                  </>
                )}
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </aside>
  );
};

export default SideBar;
