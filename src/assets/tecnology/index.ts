import { IIcon } from "../types";
import docker from "./docker.svg";
import git from "./git.svg";
import nextjs from "./nextjs.svg";
import node from "./node.svg";
import postgres from "./postgresql.svg";
import react from "./react.svg";
import typescript from "./typescript.svg";
import express from "./express.svg";
import vitejs from "./vitejs.svg";

export const tecnologiesIcons: IIcon[] = [
  {
    alt: "React",
    src: react,
    url: "https://react.dev/",
  },
  {
    alt: "Typescript",
    src: typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    alt: "NextJS",
    src: nextjs,
    url: "https://nextjs.org/",
  },
  {
    alt: "Node",
    src: node,
    url: "https://nodejs.org/",
  },
  {
    alt: "Postgres",
    src: postgres,
    url: "https://www.postgresql.org/",
  },
  {
    alt: "Docker",
    src: docker,
    url: "https://www.docker.com/",
  },
  {
    alt: "Git",
    src: git,
    url: "https://git-scm.com/",
  },
  {
    alt: "Express",
    src: express,
    url: "https://expressjs.com/",
  },
  {
    alt: "ViteJS",
    src: vitejs,
    url: "https://vitejs.dev/",
  },
];
