import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavbarNavigationMenuItem } from "./navigationMenuItem";

export function NavbarNavigationMenu() {
  const about = [
    {
      title: "Sobre mim",
      description: "Conheça mais sobre minha trajetória",
      href: "/about",
    },
    {
      title: "Como foi feito",
      description:
        "Descubra as tecnologias e ferramentas utilizadas na construção desta página",
      href: "/how-it-was-made",
    },
  ];

  const stacks = [
    {
      title: "Tecnologias",
      description: "Conheça as tecnologias e ferramentas que utilizo",
      href: "/stacks",
    },
    {
      title: "Projetos",
      description: "Conheça os projetos que desenvolvi",
      href: "/projects",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6">
              {about.map((item, index) => (
                <NavbarNavigationMenuItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Stacks</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6">
              {stacks.map((item, index) => (
                <NavbarNavigationMenuItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
