"use client";

import Image from "next/image";
import { calcAge } from "@/utils/ageCalculator";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { img } from "@/assets/img";
import { AboutSections } from "./_components/sections";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full max-w-6xl px-6 py-8 mx-auto gap-20">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="flex gap-6 flex-col-reverse justify-between lg:flex-row">
          <Image
            src={img.profilePic}
            alt="Imagem de perfil"
            width={400}
            height={300}
            className="rounded-lg aspect-square object-scale-down mx-auto"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Sobre mim</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Meu nome é Jean, e tenho {calcAge(new Date(2004, 0, 9))} anos.
              <br />
              <br />
              Como desenvolvedor front-end, tenho aproximadamente{" "}
              {calcAge(new Date(2022, 3, 18))} anos de experiência trabalhando
              com tecnologias como ReactJS, TypeScript, Styled-components, HTML,
              CSS, Next.js, Git,{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href="/stacks" className="underline">
                      entre outras
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Descubra mais sobre as minhas stacks</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              . Minha paixão é criar interfaces dinâmicas e funcionais que
              oferecem uma excelente experiência ao usuário.
              <br />
              <br />
              Com uma sólida base em tecnologias como React, TypeScript, e
              Node.js, desenvolvi soluções eficazes e inovadoras ao longo da
              minha carreira como desenvolvedor front-end. Além disso, possuo
              ampla experiência em metodologias ágeis como Scrum e Kanban, o que
              me permite colaborar de forma eficiente e dinâmica com equipes de
              desenvolvimento. Estou à disposição para contribuir com minha
              expertise e ajudar a impulsionar seus projetos.
            </p>
          </div>
        </div>
      </motion.div>

      <AboutSections />
    </main>
  );
}
