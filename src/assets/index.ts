import { systemsIcons } from "./systems";
import { packagesIcons } from "./packages";
import { tecnologiesIcons } from "./tecnology";
import { toolsIcons } from "./tools";

export interface IIcon {
  alt: string;
  src: string;
  url: string;
}

export const packagesIconsGroup: IIcon[] = [
  {
    alt: "Axios",
    src: packagesIcons.axios,
    url: "https://axios-http.com/",
  },
  {
    alt: "Eslint",
    src: packagesIcons.eslint,
    url: "https://eslint.org/",
  },
  {
    alt: "Formik",
    src: packagesIcons.formik,
    url: "https://formik.org/",
  },
  {
    alt: "Framer Motion",
    src: packagesIcons.framer,
    url: "https://www.framer.com/motion/",
  },
  {
    alt: "Google Maps API",
    src: packagesIcons.googleMaps,
    url: "https://developers.google.com/maps/documentation/javascript/overview?hl=pt-br",
  },
  {
    alt: "Hookform",
    src: packagesIcons.hookform,
    url: "https://react-hook-form.com/",
  },
  {
    alt: "Jest",
    src: packagesIcons.jest,
    url: "https://reactrouter.com/en/main",
  },
  {
    alt: "Prisma ORM",
    src: packagesIcons.prisma,
    url: "https://www.prisma.io/",
  },
  {
    alt: "Prettier",
    src: packagesIcons.prettier,
    url: "https://prettier.io/",
  },
  {
    alt: "React Query",
    src: packagesIcons.reactQuery,
    url: "https://tanstack.com/query/latest",
  },
  {
    alt: "React Router",
    src: packagesIcons.reactRouter,
    url: "https://reactrouter.com/",
  },
  {
    alt: "Shadcn/ui",
    src: packagesIcons.shadcn,
    url: "https://ui.shadcn.com/",
  },
  {
    alt: "Styled-Components",
    src: packagesIcons.styled,
    url: "https://styled-components.com/",
  },
  {
    alt: "TailwindCSS",
    src: packagesIcons.tailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    alt: "Zod",
    src: packagesIcons.zod,
    url: "https://zod.dev/",
  },
];

export const systemsIconsGroup: IIcon[] = [
  {
    alt: "Mint",
    src: systemsIcons.mint,
    url: "https://linuxmint.com/",
  },
  {
    alt: "Windows",
    src: systemsIcons.windows,
    url: "https://www.microsoft.com/pt-br/windows/windows-11?r=1",
  },
];

export const tecnologiesIconsGroup: IIcon[] = [
  {
    alt: "React",
    src: tecnologiesIcons.react,
    url: "https://react.dev/",
  },
  {
    alt: "Typescript",
    src: tecnologiesIcons.typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    alt: "NextJS",
    src: tecnologiesIcons.nextjs,
    url: "https://nextjs.org/",
  },
  {
    alt: "Node",
    src: tecnologiesIcons.node,
    url: "https://nodejs.org/",
  },
  {
    alt: "Postgres",
    src: tecnologiesIcons.postgres,
    url: "https://www.postgresql.org/",
  },
  {
    alt: "Docker",
    src: tecnologiesIcons.docker,
    url: "https://www.docker.com/",
  },
  {
    alt: "Git",
    src: tecnologiesIcons.git,
    url: "https://git-scm.com/",
  },
  {
    alt: "Express",
    src: tecnologiesIcons.express,
    url: "https://expressjs.com/",
  },
  {
    alt: "ViteJS",
    src: tecnologiesIcons.vitejs,
    url: "https://vitejs.dev/",
  },
];

export const toolsIconsGroup: IIcon[] = [
  {
    alt: "VSCode",
    src: toolsIcons.vscode,
    url: "https://code.visualstudio.com/",
  },
  {
    alt: "Figma",
    src: toolsIcons.figma,
    url: "https://www.figma.com/",
  },
  {
    alt: "Gitlab",
    src: toolsIcons.gitlab,
    url: "https://about.gitlab.com/",
  },
  {
    alt: "Jira",
    src: toolsIcons.jira,
    url: "https://www.atlassian.com/br/software/jira",
  },
  {
    alt: "DBeaver",
    src: toolsIcons.dbeaver,
    url: "https://dbeaver.io/",
  },
  {
    alt: "Vercel",
    src: toolsIcons.vercel,
    url: "https://vercel.com/",
  },
  {
    alt: "Postman",
    src: toolsIcons.postman,
    url: "https://www.postman.com/",
  },
  {
    alt: "ChatGPT",
    src: toolsIcons.chatGPT,
    url: "https://chat.openai.com/",
  },
];
