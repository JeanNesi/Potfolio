import { Atom } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ThemeChanger } from "./themeChanger";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-6xl flex mx-auto justify-between p-6">
        <Atom name="menu" size={40} />

        <ThemeChanger />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 ">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Sobre mim
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground min-w-40">
                          Conheça mais sobre minha trajetória
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>

                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Projetos
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground min-w-40">
                          Meus projeto que estão em desenvolvimento ou
                          finalizados
                        </p>
                      </a>
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
