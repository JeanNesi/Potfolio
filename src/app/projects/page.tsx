"use client";

import { img } from "@/assets/img";
import { IProjectCard, ProjectCard } from "@/components/projectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  const professionalProjects: IProjectCard[] = [
    {
      title: "Darwin - Saúde Inteligente",
      description:
        "Darwin Saúde é uma plataforma que oferece soluções em gestão de clínicas e consultórios médicos com foco em atendimento personalizado.",
      imgSrc: img.darwin,
      devDescription:
        "Atuo como desenvolvedor front-end, com foco em web, utilizando React e TypeScript, e atualmente também trabalho como UX/UI designer, utilizando Figma.",
      className: "bg-[#0C918B]",
      linkLabel: "Acesse o site",
      repoUrl: "https://darwinsaude.com.br/",
    },
    {
      title: "Vigilância Triângulo",
      description:
        "Aplicação mobile para realização de rondas, check-in em pontos de fiscalização e registro de inconsistências. Além disso, conta com uma plataforma web dedicada à gestão e monitoramento das rondas em tempo real.",
      imgSrc: img.triangulo,
      devDescription:
        "Atuei como desenvolvedor front-end, com foco em web e mobile, utilizando React, React Native e TypeScript.",
      className: "bg-[#FFCA51]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.grupotriangulo.com.br/",
    },
    {
      title: "Imbraforte",
      description:
        "Aplicação de gestão para soluções IoT dos dispositivos de segurança da Imbraforte, oferecendo recursos avançados de monitoramento e controle aos usuários por meio de um aplicativo intuitivo.",
      imgSrc: img.imbraforte,
      devDescription:
        "Atuei como desenvolvedor front-end, com foco em web e mobile, utilizando React, React Native e TypeScript.",
      className: "bg-[#FEB400]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.imbraforte.com.br/",
    },
    {
      title: "Frigo Engenharia",
      description:
        "Aplicação web para a gestão de loteamentos, abrangendo regularização, projetos e construção, com integração de mapas para facilitar o planejamento e monitoramento.",
      imgSrc: img.frigo,
      devDescription:
        "Atuei como desenvolvedor front-end com foco em aplicações web, utilizando React e TypeScript. Além disso, utilizei a API de Maps do Google, incluindo tanto a Maps JavaScript API quanto a Drawing API.",
      className: "bg-[#00254C]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.instagram.com/frigoengenharia/",
    },
    {
      title: "Polipet",
      description:
        "Aplicativo de e-commerce integrado à plataforma Wake/Tray, oferecendo mais de 15 mil produtos de pet shop das melhores marcas para cães, gatos e outros animais de estimação.",
      imgSrc: img.polipet,
      devDescription:
        "Atuei como desenvolvedor mobile, utilizando React Native e TypeScript.",
      className: "bg-[#333333]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.polipet.com.br/",
    },
    {
      title: "Jugasa",
      description:
        "Programa de pontos desenvolvido em modelo mobile, com integrações ao ERP para quantificação de pontos, acompanhamento de serviços e outras funcionalidades disponíveis no aplicativo.",
      imgSrc: img.jugasa,
      devDescription:
        "Atuei como desenvolvedor front-end com foco em aplicações web, utilizando React e TypeScript. Além disso, conta com uma plataforma web dedicada à gestão.",
      className: "bg-[#00254C]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.jugasachevrolet.com.br/",
    },
    {
      title: "Livros Escolares",
      description:
        "Aplicativo de e-commerce integrado à plataforma Wake/Tray, com recursos como página inicial, integração de banners, navegação por produtos e categorias, carrinho de compras, entre outros.",
      imgSrc: img.livrosEscolares,
      devDescription:
        "Atuei como desenvolvedor mobile, utilizando React Native e TypeScript.",
      className: "bg-[#12141C]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.livrosescolares.com.br/",
    },
    {
      title: "Mademil",
      description:
        "Sistema de gestão interna para a empresa Mademil, com recursos como controle de estoque, vendas, relatórios e integração.",
      imgSrc: img.mademil,
      devDescription:
        "Atuei como desenvolvedor frontend web, utilizando React e TypeScript.",
      className: "bg-[#333333]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.mademil.com.br/",
    },
    {
      title: "Pierini",
      description: "Sistema de gestão interna.",
      imgSrc: img.pierini,
      devDescription:
        "Atuei como desenvolvedor frontend web, utilizando React e TypeScript.",
      className: "bg-[#E8E8E8]",
      linkLabel: "Acesse o site",
      repoUrl: "https://pierini.com.br/",
    },
    {
      title: "Centercamp",
      description:
        "Plataforma de e-commerce voltada para a venda de cursos digitais, oferecendo acesso aos conteúdos adquiridos em formatos de vídeo ou PDF. A plataforma também inclui recursos para realização de avaliações, geração de certificados e outras funcionalidades.",
      imgSrc: img.centercamp,
      devDescription:
        "Atuei como desenvolvedor web, utilizando React e TypeScript.",
      className: "bg-[#1D6344]",
      linkLabel: "Acesse o site",
      repoUrl: "https://www.instagram.com/centercampcursosdetransito/",
    },
  ];

  const projects: IProjectCard[] = [
    {
      title: "Estuda AI",
      description:
        "Estuda AI oferece a criação de quadros de estudo utilizando inteligência artificial, proporcionando uma abordagem mais organizada e otimizada para seus estudos.",
      imgSrc: img.estudaAiLp,
      devDescription:
        "A aplicação foi desenvolvida utilizando as seguintes tecnologias: React JS, TypeScript, Vite.js, Tailwind, Shadcn/ui, HookForm e Zod.",
    },
    {
      title: "Apera",
      description:
        "Apera é uma plataforma que permite gerenciar e acompanhar seus investimentos de forma fácil e intuitiva. Com a Apera, você pode monitorar sua carteira de investimentos e o desempenho de suas ações em tempo real. A plataforma integra-se com a Brapi, proporcionando atualizações contínuas e precisas sobre seus investimentos.",
      imgSrc: img.apera,
      repoUrl: "https://github.com/JeanNesi/Apera-ABP",
      devDescription:
        "A aplicação foi desenvolvida utilizando as seguintes tecnologias: React JS, TypeScript, Vite.js, Styled-components, Formik e Yup.",
    },
    {
      title: "ChatBot AI",
      description:
        "O Chatbot é uma aplicação que simula o funcionamento do ChatGPT, porém de forma local. Isso significa que o modelo de linguagem roda diretamente na máquina do usuário, utilizando apenas os recursos locais. Essa abordagem torna o uso do chatbot totalmente gratuito.",
      imgSrc: img.chatbot,
      repoUrl: "https://github.com/JeanNesi/Chatbot-AI",
      devDescription:
        "A aplicação foi desenvolvida utilizando as seguintes tecnologias: Next Js, TypeScript, Shadcn/ui, Tailwind, Ollama.",
    },
  ];
  return (
    <main className="flex flex-col w-full max-w-6xl px-6 py-8 mx-auto gap-8">
      <div className="mb-6 flex flex-col gap-4">
        <h1 className="text-5xl font-bold translate-y-">Projetos</h1>

        <p>
          Esta página apresenta uma seleção de alguns dos projetos em que
          trabalhei, tanto profissionais quanto pessoais. Para explorar mais
          projetos pessoais, visite meu{" "}
          <Link
            href={"https://github.com/JeanNesi?page=1&tab=repositories"}
            className="underline hover:scale-110 transition-transform"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
      </div>

      <Tabs defaultValue="professional" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="professional">
            Profissionais
          </TabsTrigger>
          <TabsTrigger className="w-full" value="personal">
            Pessoais
          </TabsTrigger>
        </TabsList>
        <TabsContent value="professional" className="py-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col gap-8"
          >
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} defaultImage />
            ))}
          </motion.div>
        </TabsContent>
        <TabsContent value="personal" className="py-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
