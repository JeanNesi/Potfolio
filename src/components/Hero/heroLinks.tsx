import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroLinks() {
  const links = [
    {
      href: "/about",
      label: "Sobre mim",
      img: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      href: "/projects",
      label: "Projetos",
      img: "https://images.unsplash.com/photo-1623520333087-62b8793e3d23?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      href: "/stacks",
      label: "Tecnologias",
      img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      href: "/how-it-was-made",
      label: "Como foi feito",
      img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Card
          key={link.href}
          className=" flex-grow basis-60 group aspect-video overflow-hidden grayscale-[100] hover:grayscale-0 transition-all duration-300 cursor-pointer"
        >
          <Link href={link.href} aria-label={link.label}>
            <CardContent className="p-0">
              <Image
                src={link.img}
                alt="Sobre mim"
                fill
                className="object-cover"
              />
              <h6 className="absolute bottom-2 left-3 font-bold">
                {link.label}
              </h6>

              <div className="absolute bottom-2 right-3 text-gray-900 font-medium text-xs bg-white rounded-3xl flex items-center py-1 px-2 ">
                <p className="w-0 overflow-hidden group-hover:w-14 transition-all whitespace-nowrap">
                  Ver mais
                </p>
                <ArrowRight size={16} color="black" />
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
