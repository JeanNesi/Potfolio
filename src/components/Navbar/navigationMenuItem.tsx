import { NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";

interface IProps {
  title: string;
  description: string;
  href: string;
}

export function NavbarNavigationMenuItem({ title, description, href }: IProps) {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild title={description}>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground min-w-52">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
