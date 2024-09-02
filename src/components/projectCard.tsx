"use client";
import { LinkIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export interface IProjectCard {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  repoUrl?: string;
  translateY?: "3/4" | "1/2" | "1/3";
  transitionDuration?: string;
  devDescription?: string;
  index: number;
}

export function ProjectCard({
  title,
  imgSrc,
  description,
  repoUrl,
  translateY = "1/2",
  transitionDuration = "3s",
  devDescription,
  index,
}: IProjectCard) {
  return (
    <motion.div
      className="flex flex-col gap-4 w-full"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 100 : -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h5 className="text-2xl font-bold">{title}</h5>

      <p className="text-gray-700 dark:text-gray-300 text-base">
        {description}
      </p>

      <p className="text-gray-700 dark:text-gray-300">{devDescription}</p>

      {repoUrl && (
        <Link
          className="hover:underline text-blue-700 dark:text-blue-500 text-sm flex items-center gap-1"
          href={repoUrl}
          target="_blank"
        >
          <LinkIcon size={16} />
          Acesse o repositório
        </Link>
      )}

      <div className="relative lg:h-96 overflow-hidden group rounded-3xl lg:hover:scale-105 transition-transform md:pointer-events-auto pointer-events-none shadow-2xl h-fit">
        <AlertDialog>
          <AlertDialogTrigger>
            <Image
              src={imgSrc}
              alt="Scroll on Hover Image"
              className={`transform transition-transform ease-linear group-hover:-translate-y-${translateY}`}
              style={{ transitionDuration }}
              objectFit="cover"
            />
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-screen-2xl">
            <AlertDialogHeader>
              <AlertDialogDescription className="overflow-auto max-h-[80dvh]">
                <Image src={imgSrc} alt="Scroll on Hover Image" />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Fechar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.div>
  );
}
