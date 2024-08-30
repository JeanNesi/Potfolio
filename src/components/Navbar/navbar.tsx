import { NavigationMenu } from "../ui/navigation-menu";
import Link from "next/link";
import { NavbarLogo } from "./logo";
import { NavbarNavigationMenu } from "./navigationMenu";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-6xl flex mx-auto justify-between p-6">
        <NavbarLogo />
        <NavbarNavigationMenu />
      </div>
    </header>
  );
}
