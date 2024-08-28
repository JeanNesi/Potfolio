import { IIcon } from "../types";
import dbeaver from "./dbeaver.svg";
import figma from "./figma.svg";
import gitlab from "./gitlab.svg";
import jira from "./jira.svg";
import postman from "./postman.svg";
import vscode from "./vscode.svg";

export const toolsIcons: IIcon[] = [
  {
    alt: "VSCode",
    src: vscode,
  },
  {
    alt: "Postman",
    src: postman,
  },
  {
    alt: "Jira",
    src: jira,
  },
  {
    alt: "DBEAVER",
    src: dbeaver,
  },
  {
    alt: "Figma",
    src: figma,
  },
  {
    alt: "Gitlab",
    src: gitlab,
  },
];
