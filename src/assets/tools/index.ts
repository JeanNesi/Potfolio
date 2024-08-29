import { IIcon } from "../types";
import dbeaver from "./dbeaver.svg";
import figma from "./figma.svg";
import gitlab from "./gitlab.svg";
import jira from "./jira.svg";
import postman from "./postman.svg";
import vscode from "./vscode.svg";
import chatGPT from "./chatGPT.svg";

export const toolsIcons: IIcon[] = [
  {
    alt: "VSCode",
    src: vscode,
    url: "https://code.visualstudio.com/",
  },
  {
    alt: "Figma",
    src: figma,
    url: "https://www.figma.com/",
  },
  {
    alt: "Gitlab",
    src: gitlab,
    url: "https://about.gitlab.com/",
  },
  {
    alt: "Jira",
    src: jira,
    url: "https://www.atlassian.com/br/software/jira",
  },
  {
    alt: "DBeaver",
    src: dbeaver,
    url: "https://dbeaver.io/",
  },

  {
    alt: "Postman",
    src: postman,
    url: "https://www.postman.com/",
  },
  {
    alt: "ChatGPT",
    src: chatGPT,
    url: "https://chat.openai.com/",
  },
];
