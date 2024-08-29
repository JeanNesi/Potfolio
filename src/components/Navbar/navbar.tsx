import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { NavbarLogo } from "./navbarLogo";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-6xl flex mx-auto justify-between p-6">
        <NavbarLogo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 ">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Sobre mim
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground min-w-40">
                          Conheça mais sobre minha trajetória
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/projects"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Projetos
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground min-w-40">
                          Meus projeto que estão em desenvolvimento ou
                          finalizados
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
