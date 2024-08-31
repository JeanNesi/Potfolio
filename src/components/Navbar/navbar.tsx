import { NavbarLogo } from "./logo";
import { NavbarNavigationMenu } from "./navigationMenu";

export function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-background z-10 duration-300">
      <div className="max-w-6xl flex mx-auto justify-between p-6">
        <NavbarLogo />
        <NavbarNavigationMenu />
      </div>
    </header>
  );
}
