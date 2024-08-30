import { GraduationCap, Laptop } from "lucide-react";
import { AboutAccordion } from "./accordion";

export function AboutSections() {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "Ada Software House",
      companyUrl: "https://adasoftwarehouse.com/",
      complement: "Híbrido",
      startDate: new Date(2022, 3, 18),
      endDate: `momento`,
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
      complement: "Graduação",
      startDate: new Date(2022, 1, 1),
      endDate: new Date(2025, 11, 15),
      address: "Criciúma, SC",
      description: [],
    },
    {
      title: "Curso Técnico em Mecatrônica",
      company: "IFSC - Instituto Federal de Santa Catarina",
      companyUrl: "https://www.ifsc.edu.br/web/campus-criciuma",
      complement: "Técnico",
      startDate: new Date(2019, 1, 1),
      endDate: new Date(2022, 1, 1),
      address: "Criciúma, SC",
      description: [],
    },
  ];

  const sections = [
    {
      title: "Experiências",
      type: "experience" as "experience",
      icon: <Laptop />,
      items: experiences,
    },
    {
      title: "Formações",
      type: "graduation" as "graduation",
      icon: <GraduationCap />,
      items: graduations,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="flex  gap-4 items-center">
            {section.icon}

            <h3 className="text-2xl font-bold">{section.title}</h3>
          </div>

          <AboutAccordion type={section.type} items={section.items} />
        </div>
      ))}
    </div>
  );
}
