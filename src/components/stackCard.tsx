import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Image from "next/image";

interface IProps {
  item: {
    src: string;
    alt: string;
    url: string;
  };
}
export function StackCard({ item }: IProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={item.url}
            target="_blank"
            className="grid bg-opacity-50 backdrop-blur-3xl shadow-gray-300 place-items-center rounded-lg w-24 h-24 shadow-lg dark:shadow-2xl dark:shadow-gray-700 transition-transform hover:scale-105"
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="aspect-video w-16 h-16"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{item.alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
