import { IIcon } from "../types";
import docker from "./docker.svg";
import git from "./git.svg";
import nextjs from "./nextjs.svg";
import node from "./node.svg";
import postgres from "./postgresql.svg";
import react from "./react.svg";
import typescript from "./typescript.svg";

export const tecnologiesIcons: IIcon[] = [
  {
    alt: "React",
    src: react,
  },
  {
    alt: "Typescript",
    src: typescript,
  },
  {
    alt: "NextJS",
    src: nextjs,
  },
  {
    alt: "Node",
    src: node,
  },
  {
    alt: "Postgres",
    src: postgres,
  },
  {
    alt: "Docker",
    src: docker,
  },
  {
    alt: "Git",
    src: git,
  },
];
