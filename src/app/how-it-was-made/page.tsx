"use client";

import { packagesIcons } from "@/assets/packages";
import { tecnologiesIcons } from "@/assets/tecnology";
import { toolsIcons } from "@/assets/tools";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export default function HowItWasMadePage() {
  const stacks = [
    {
      alt: "Next.js",
      src: tecnologiesIcons.nextjs,
      description:
        "Esse framework React é o coração da nossa aplicação. Ele nos permite criar interfaces que carregam rápido e oferecem uma navegação sem interrupções, seja em páginas estáticas ou dinâmicas.",
    },
    {
      alt: "TypeScript",
      src: tecnologiesIcons.typescript,
      description:
        "Com TypeScript, nosso código se torna mais seguro e previsível. Essa linguagem adiciona tipagem estática ao JavaScript, ajudando a evitar erros e tornando o desenvolvimento mais tranquilo e confiável.",
    },
    {
      alt: "Tailwind CSS",
      src: packagesIcons.tailwindcss,
      description:
        "Tailwind é nosso aliado na construção de interfaces modernas e responsivas. Ele nos dá a liberdade de criar estilos diretamente no HTML, agilizando o processo de design e mantendo tudo organizado.",
    },
    {
      alt: "Framer Motion",
      src: packagesIcons.framer,
      description:
        "Queremos que cada interação com nossa aplicação seja envolvente. Framer Motion nos ajuda a criar animações suaves e intuitivas, tornando a experiência do usuário mais rica e agradável.",
    },
    {
      alt: "React Three Fiber",
      src: packagesIcons.threeJs,
      iconUrl: "https://icons8.com/icon/j0beBVnUo5dZ/three.js",
      description:
        "Com React Three.js, damos vida a experiências 3D diretamente na web. Essa biblioteca nos permite integrar gráficos 3D de alta qualidade em nossa aplicação React, criando interfaces imersivas e visuais impactantes que cativam os usuários.",
      link: {
        label: "Floating Laptop Model",
        url: "https://codesandbox.io/p/sandbox/q23sw",
      },
    },
    {
      alt: "Shadcn/ui",
      src: packagesIcons.shadcn,
      description:
        "Este conjunto de componentes UI nos dá a flexibilidade de criar interfaces consistentes e personalizadas, sem comprometer a qualidade ou a velocidade de desenvolvimento.",
    },
    {
      alt: "Vercel",
      src: toolsIcons.vercel,
      description:
        "Finalmente, hospedamos nossa aplicação na Vercel, uma plataforma que facilita a implantação e garante que nossa aplicação esteja sempre disponível, rápida e pronta para escalar conforme necessário.",
    },
  ];
  return (
    <motion.main
      className="flex flex-col w-full max-w-6xl px-6 py-8 mx-auto gap-8"
      initial={{
        opacity: 0,
        x: -200,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h1 className="text-5xl font-bold">Como foi feito</h1>

      <p>
        Este sistema foi criado com um conjunto de tecnologias que não só
        garantem alta performance, mas também proporcionam uma experiência de
        uso fluida e agradável. Abaixo, estão as principais ferramentas que
        utilizei:
      </p>

      <div className="flex flex-col gap-3 lg:gap-2">
        {stacks.map((stack, index) => (
          <Card
            key={index}
            className="w-fit hover:scale-105 transition-all cursor-pointer"
          >
            <CardContent className="p-8 flex gap-2 items-center">
              <Image
                src={stack.src}
                alt={stack.alt}
                width={80}
                height={80}
                className="aspect-video rounded-lg"
                onClick={() => {
                  if (stack.iconUrl) window.open(stack.iconUrl, "_blank");
                }}
              />

              <div className="flex flex-col gap-2">
                <p className="font-bold">{stack.alt}</p>

                <p className="text-sm">{stack.description}</p>

                {stack.link && (
                  <Link
                    href={stack.link.url}
                    className="flex gap-2 items-center text-blue-700 text-xs cursor-pointer hover:underline mt-4"
                    target="_blank"
                  >
                    <LinkIcon size={16} />
                    {stack.link.label}
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.main>
  );
}
