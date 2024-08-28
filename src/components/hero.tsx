import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import SvgComponent from "../assets/heroSVG";

export function Hero() {
  return (
    <div className="flex flex-col gap-6 w-full py-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">
            Olá, eu sou Jean Nesi 👋 <br /> Dev Front-end
          </h1>

          <p className="text-gray-500 text-base dark:text-gray-300">
            Unindo design e código, sigo criando projetos únicos.
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
    </div>
  );
}
