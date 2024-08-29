import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dateFormatter } from "@/utils/dateFormatter";
import {
  Building2,
  Calendar,
  GraduationCap,
  Laptop,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "Ada Software House",
      companyUrl: "https://adasoftwarehouse.com/",
      location: "Híbrido",
      startDate: new Date(2022, 3, 18),
      endDate: "momento",
      address: "Criciúma, SC",
      description: [
        "Desenvolvimento de aplicações ReactJS em TypeScript, incluindo implementação de novas funcionalidades e manutenção em projetos existentes.",
        "Manutenção e desenvolvimento de funcionalidades em aplicações React Native.",
        "Manutenção e desenvolvimento de funcionalidades em aplicações com Node.js e Prisma ORM.",
        "Criação de landing pages utilizando Next.js, com ênfase na usabilidade e otimização para motores de busca.",
        "Desenvolvimento de componentes reutilizáveis em conformidade com as melhores práticas de design e programação, visando simplificar a implementação e manutenção de projetos.",
        "Desenvolvimento de aplicações nas áreas de saúde, segurança, indústria, educação e comércio.",
      ],
    },
  ];

  const graduations = [
    {
      title: "Engenharia de Software",
      company: "UNISATC - Centro Universitário Satc",
      companyUrl: "https://unisatc.com.br/",
      location: "Graduação",
      startDate: new Date(2022, 1, 1),
      endDate: new Date(2025, 11, 15),
      address: "Criciúma, SC",
      description: [],
    },
    {
      title: "Curso Técnico em Mecatrônica",
      company: "IFSC - Instituto Federal de Santa Catarina",
      companyUrl: "https://www.ifsc.edu.br/web/campus-criciuma",
      location: "Técnico",
      startDate: new Date(2019, 1, 1),
      endDate: new Date(2022, 1, 1),
      address: "Criciúma, SC",
      description: [],
    },
  ];

  const calcExperienceTime = (experience: (typeof experiences)[0]) => {
    const startDate = new Date(experience.startDate);
    const endDate =
      experience.endDate !== "momento"
        ? new Date(experience.endDate)
        : new Date();

    const diffMonths = endDate.getMonth() - startDate.getMonth();
    const diffYears = Math.ceil(
      endDate.getFullYear() - startDate.getFullYear()
    );

    return `${diffYears} anos e ${diffMonths} meses `;
  };

  return (
    <main className="flex flex-col w-full max-w-6xl p-6 mx-auto gap-8">
      <div>
        <div className="flex gap-4 justify-between">
          <Image
            src={
              "https://images.unsplash.com/photo-1724926201899-40530ae44ee4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Sobre mim</h2>
            <p className="text-gray-300">
              Sou um desenvolvedor front-end apaixonado por tecnologia e
              inovação. Atualmente trabalho na Ada Software House, onde
              desenvolvo aplicações web e mobile com foco na experiência do
              usuário e na qualidade do código. Estou sempre buscando aprender
              coisas novas e me manter atualizado com as tecnologias mais
              recentes.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex  gap-4 items-center">
          <Laptop />

          <h3 className="text-2xl font-bold">Experiência</h3>
        </div>

        <Accordion type="single" collapsible>
          {experiences.map((experience, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>• {experience.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <Link
                      href={experience.companyUrl}
                      className="underline"
                      target="_blank"
                    >
                      {experience.company}
                    </Link>
                    •<p>{experience.location}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <p>
                      {dateFormatter(experience.startDate)} -{" "}
                      {experience.endDate}
                    </p>
                    •<p>{calcExperienceTime(experience)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <p>{experience.address}</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 max-w-96 ">
                  {experience.description.map((description, index) => (
                    <li key={index} className="ml-3 flex gap-2 text-gray-300">
                      <div>•</div> {description}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div>
        <div className="flex  gap-4 items-center">
          <GraduationCap />
          <h3 className="text-2xl font-bold">Formação</h3>
        </div>

        <Accordion type="single" collapsible>
          {graduations.map((experience, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center gap-4">
                  • {experience.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <Link
                      href={experience.companyUrl}
                      className="underline"
                      target="_blank"
                    >
                      {experience.company}
                    </Link>
                    •<p>{experience.location}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <p>
                      {dateFormatter(experience.startDate)} -{" "}
                      {dateFormatter(experience.endDate)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <p>{experience.address}</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 max-w-96 ">
                  {experience.description.map((description, index) => (
                    <li key={index} className="ml-3 flex gap-2 text-gray-300">
                      <div>•</div> {description}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
