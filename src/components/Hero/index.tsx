"use client";

import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import SvgComponent from "./heroSVG";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="flex flex-col gap-6 w-full py-20"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">
            Olá, eu sou <br /> Jean Nesi 👋
          </h1>

          <p className="text-gray-500 text-base dark:text-gray-300">
            Minha missão? Unir design e código para dar vida a suas ideias.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/jeancarlosnesi/"
              target="_blank"
              aria-label="Linkedin"
            >
              <Button>
                Linkedin
                <Linkedin size={16} />
              </Button>
            </Link>

            <Link
              href="https://github.com/JeanNesi"
              target="_blank"
              aria-label="Github"
            >
              <Button>
                Github
                <Github size={16} />
              </Button>
            </Link>
          </div>
        </div>

        <SvgComponent />
      </div>
    </motion.div>
  );
}
