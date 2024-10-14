"use client";
import { LinkIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { cn } from "@/lib/utils";

export interface IProjectCard {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  repoUrl?: string;
  linkLabel?: string;
  devDescription?: string;
  defaultImage?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  imgSrc,
  description,
  repoUrl,
  devDescription,
  defaultImage = false,
  className,
  linkLabel = "Acesse o repositório",
}: IProjectCard) {
  return (
    <div className="flex flex-col gap-4 w-full">
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
          {linkLabel}
        </Link>
      )}

      {defaultImage && (
        <div
          className={cn(
            "p-6 flex justify-center items-center rounded-3xl h-[384px] lg:hover:scale-105 transition-transform",
            className
          )}
        >
          <div className="relative aspect-video max-w-[250px] w-full ">
            <Image
              src={imgSrc}
              fill
              alt="Scroll on Hover Image"
              className="object-contain "
            />
          </div>
        </div>
      )}

      {!defaultImage && (
        <div className="relative lg:h-96 overflow-hidden group rounded-3xl lg:hover:scale-105 transition-transform md:pointer-events-auto pointer-events-none shadow-2xl h-fit">
          <AlertDialog>
            <AlertDialogTrigger>
              <Image
                src={imgSrc}
                alt="Scroll on Hover Image"
                className="transform transition-transform ease-linear"
                objectFit="cover"
              />
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-screen-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
              </AlertDialogHeader>

              <AlertDialogDescription className="overflow-auto max-h-[80dvh]">
                <Image src={imgSrc} alt="Scroll on Hover Image" />
              </AlertDialogDescription>

              <AlertDialogFooter>
                <AlertDialogAction>Fechar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
}
