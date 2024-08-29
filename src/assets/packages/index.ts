import { IIcon } from "../types";
import hookform from "./hookform.svg";
import shadcn from "./shadcn.svg";
import styled from "./styled.svg";
import tailwindcss from "./tailwindcss.svg";
import zod from "./zod.svg";
import axios from "./axios.svg";
import reactQuery from "./reactQuery.svg";
import reactRouter from "./reactRouter.svg";
import jest from "./jest.svg";
import googleMaps from "./googleMaps.svg";
import prisma from "./prisma.svg";
import eslint from "./eslint.svg";
import prettier from "./prettier.svg";
import formik from "./formik.svg";

export const packagesIcons: IIcon[] = [
  {
    alt: "Axios",
    src: axios,
    url: "https://axios-http.com/",
  },
  {
    alt: "Eslint",
    src: eslint,
    url: "https://eslint.org/",
  },
  {
    alt: "Formik",
    src: formik,
    url: "https://formik.org/",
  },
  {
    alt: "Google Maps API",
    src: googleMaps,
    url: "https://developers.google.com/maps/documentation/javascript/overview?hl=pt-br",
  },
  {
    alt: "Hookform",
    src: hookform,
    url: "https://react-hook-form.com/",
  },
  {
    alt: "Jest",
    src: jest,
    url: "https://reactrouter.com/en/main",
  },
  {
    alt: "Prisma ORM",
    src: prisma,
    url: "https://www.prisma.io/",
  },
  {
    alt: "Prettier",
    src: prettier,
    url: "https://prettier.io/",
  },
  {
    alt: "React Query",
    src: reactQuery,
    url: "https://tanstack.com/query/latest",
  },
  {
    alt: "React Router",
    src: reactRouter,
    url: "https://reactrouter.com/",
  },
  {
    alt: "Shadcn/ui",
    src: shadcn,
    url: "https://ui.shadcn.com/",
  },
  {
    alt: "Styled-Components",
    src: styled,
    url: "https://styled-components.com/",
  },
  {
    alt: "TailwindCSS",
    src: tailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    alt: "Zod",
    src: zod,
    url: "https://zod.dev/",
  },
];
