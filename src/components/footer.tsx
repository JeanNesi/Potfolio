import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const links = [
    {
      href: "https://www.linkedin.com/in/jeancarlosnesi/",
      label: "Linkedin",
      icon: Linkedin,
    },
    {
      href: "https://github.com/JeanNesi",
      label: "Github",
      icon: Github,
    },
  ];
  return (
    <footer className="flex items-center justify-center w-full border-t mt-auto p-6 ">
      <div className="flex items-center justify-center space-x-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <link.icon />
          </Link>
        ))}
      </div>
    </footer>
  );
}
