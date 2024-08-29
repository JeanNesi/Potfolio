import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dateFormatter } from "@/utils/dateFormatter";
import { Building2, Calendar, Laptop, MapPin } from "lucide-react";
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
    <main className="flex flex-col w-full max-w-6xl p-6 mx-auto">
      <h1>Experiências</h1>

      <Accordion type="single" collapsible>
        {experiences.map((experience, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <Laptop />
                {experience.title}
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
                    {dateFormatter(experience.startDate)} - {experience.endDate}
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
    </main>
  );
}
