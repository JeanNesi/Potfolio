"use client";

import {
  tecnologiesIconsGroup,
  packagesIconsGroup,
  toolsIconsGroup,
  systemsIconsGroup,
} from "@/assets";
import { StackCard } from "@/components/stackCard";
import { motion } from "framer-motion";

export default function StacksPage() {
  const stacks = [
    {
      title: "Tecnologias",
      items: tecnologiesIconsGroup,
    },
    {
      title: "Pacotes",
      items: packagesIconsGroup,
    },
    {
      title: "Ferramentas",
      items: toolsIconsGroup,
    },
    {
      title: "Sistemas Operacionais",
      items: systemsIconsGroup,
    },
  ];

  return (
    <main className="flex flex-col w-full max-w-6xl px-6 py-8 mx-auto gap-8">
      <h1 className="text-5xl font-bold mb-6">Stacks</h1>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col gap-8"
      >
        {stacks.map((stack) => (
          <div key={stack.title} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center md:text-start">
              {stack.title}
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
              {stack.items.map((itemImg, index) => (
                <StackCard key={index} item={itemImg} index={index} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </main>
  );
}
