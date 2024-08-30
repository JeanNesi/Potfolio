import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import Link from "next/link";
import {
  packagesIconsGroup,
  systemsIconsGroup,
  tecnologiesIconsGroup,
  toolsIconsGroup,
} from "@/assets";

export function Stacks() {
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
    <div className="flex flex-col gap-6">
      {stacks.map((stack) => (
        <div key={stack.title} className="flex flex-col gap-4">
          <h5>{stack.title}</h5>
          <div className="flex items-center gap-2 flex-wrap">
            {stack.items.map((itemImg, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      key={index}
                      href={itemImg.url}
                      target="_blank"
                      className="grid bg-opacity-50 backdrop-blur-3xl shadow-gray-300 place-items-center rounded-lg w-24 h-24 shadow-lg dark:shadow-2xl dark:shadow-gray-700 transition-transform hover:scale-105"
                    >
                      <Image
                        src={itemImg.src}
                        alt={itemImg.alt}
                        className="aspect-video w-16 h-16"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{itemImg.alt}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
