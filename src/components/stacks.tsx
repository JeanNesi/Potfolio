import { systemsIcons } from "@/assets/systems";
import { tecnologiesIcons } from "@/assets/tecnology";
import { toolsIcons } from "@/assets/tools";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { packagesIcons } from "@/assets/packages";
import Link from "next/link";

export function Stacks() {
  const stacks = [
    {
      title: "Tecnologias",
      items: tecnologiesIcons,
    },
    {
      title: "Pacotes",
      items: packagesIcons,
    },
    {
      title: "Ferramentas",
      items: toolsIcons,
    },
    {
      title: "Sistemas Operacionais",
      items: systemsIcons,
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
                      className="grid bg-opacity-50 backdrop-blur-3xl place-items-center rounded-lg w-20 h-20 shadow-lg dark:shadow-2xl dark:shadow-gray-700 transition-transform hover:scale-105"
                    >
                      <Image
                        src={itemImg.src}
                        width={80}
                        height={80}
                        alt={itemImg.alt}
                        className="aspect-video"
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
