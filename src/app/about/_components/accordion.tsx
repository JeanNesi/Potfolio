import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dateFormatter } from "@/utils/dateFormatter";
import { Building2, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import {
  differenceInCalendarYears,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

interface IItem {
  title: string;
  company: string;
  companyUrl: string;
  complement: string;
  startDate: Date;
  endDate: string | Date;
  address: string;
  description: string[];
}

interface IProps {
  type: "experience" | "graduation";
  items: IItem[];
}

export function AboutAccordion({ type, items }: IProps) {
  const calcExperienceTime = (item: IItem) => {
    const startDate = new Date(item.startDate);

    const endDate =
      item.endDate !== "momento" ? new Date(item.endDate) : new Date();

    const diffYears = differenceInYears(endDate, startDate);
    const diffMonths = differenceInMonths(endDate, startDate) % 12;

    if (!diffYears) return `${diffMonths} meses `;

    return `${diffYears} anos e ${diffMonths} meses `;
  };

  return (
    <Accordion type="single" collapsible defaultValue={"item-0"}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className="flex items-center gap-4">• {item.title}</div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Building2 size={16} />
                <Link
                  href={item.companyUrl}
                  className="underline"
                  target="_blank"
                >
                  {item.company}
                </Link>
                •<p>{item.complement}</p>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={16} />

                <p>
                  {dateFormatter(item.startDate)} -{" "}
                  {item.endDate === "momento"
                    ? item.endDate
                    : dateFormatter(item.endDate)}
                </p>

                {type === "experience" && <p>• {calcExperienceTime(item)}</p>}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <p>{item.address}</p>
              </div>
            </div>

            <ul className="flex flex-col gap-2 max-w-96 ">
              {item.description.map((description, index) => (
                <li
                  key={index}
                  className="ml-3 flex gap-2 text-gray-600 dark:text-gray-400"
                >
                  <div>•</div> {description}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
