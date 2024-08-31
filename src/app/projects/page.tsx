import { img } from "@/assets/img";
import { ProjectCard } from "@/components/projectCard";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Estuda AI",
      description:
        "Estuda AI oferece a criação de quadros de estudo utilizando inteligência artificial, proporcionando uma abordagem mais organizada e otimizada para seus estudos.",
      imgSrc: img.estudaAiLp,
      translateY: "80%",
      transitionDuration: "10s",
      devDescription:
        "A aplicação foi desenvolvida utilizando as seguintes tecnologias: React JS, TypeScript, Vite.js, Tailwind, Shadcn/ui, HookForm e Zod.",
    },
    {
      title: "Apera",
      description:
        "Apera é uma plataforma que permite gerenciar e acompanhar seus investimentos de forma fácil e intuitiva. Com a Apera, você pode monitorar sua carteira de investimentos e o desempenho de suas ações em tempo real. A plataforma integra-se com a Brapi, proporcionando atualizações contínuas e precisas sobre seus investimentos.",
      imgSrc: img.apera,
      translateY: "50%",
      transitionDuration: "3s",
      repoUrl: "https://github.com/JeanNesi/Apera-ABP",
      devDescription:
        "A aplicação foi desenvolvida utilizando as seguintes tecnologias: React JS, TypeScript, Vite.js, Styled-components, Formik e Yup.",
    },
    {
      title: "ChatBot AI",
      description:
        "O Chatbot é uma aplicação que simula o funcionamento do ChatGPT, porém de forma local. Isso significa que o modelo de linguagem roda diretamente na máquina do usuário, utilizando apenas os recursos locais. Essa abordagem torna o uso do chatbot totalmente gratuito.",
      imgSrc: img.chatbot,
      translateY: "45%",
      transitionDuration: "3s",
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
          Esta página apresenta uma seleção de alguns dos meus projetos. Para
          explorar mais, visite meu{" "}
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
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </main>
  );
}
