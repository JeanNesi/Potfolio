import { packagesIcons } from "@/assets/packages";
import { tecnologiesIcons } from "@/assets/tecnology";
import { toolsIcons } from "@/assets/tools";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HowItWasMadePage() {
  const stacks = [
    {
      alt: "Next.js",
      src: tecnologiesIcons.nextjs,
      url: "https://nextjs.org/",
      description:
        "Esse framework React é o coração da nossa aplicação. Ele nos permite criar interfaces que carregam rápido e oferecem uma navegação sem interrupções, seja em páginas estáticas ou dinâmicas.",
    },
    {
      alt: "TypeScript",
      src: tecnologiesIcons.typescript,
      url: "https://www.typescriptlang.org/",
      description:
        "Com TypeScript, nosso código se torna mais seguro e previsível. Essa linguagem adiciona tipagem estática ao JavaScript, ajudando a evitar erros e tornando o desenvolvimento mais tranquilo e confiável.",
    },
    {
      alt: "Tailwind CSS",
      src: packagesIcons.tailwindcss,
      url: "https://tailwindcss.com/",
      description:
        "Tailwind é nosso aliado na construção de interfaces modernas e responsivas. Ele nos dá a liberdade de criar estilos diretamente no HTML, agilizando o processo de design e mantendo tudo organizado.",
    },
    {
      alt: "Framer Motion",
      src: packagesIcons.framer,
      url: "https://www.framer.com/motion/",
      description:
        "Queremos que cada interação com nossa aplicação seja envolvente. Framer Motion nos ajuda a criar animações suaves e intuitivas, tornando a experiência do usuário mais rica e agradável.",
    },
    {
      alt: "Shadcn/ui",
      src: packagesIcons.shadcn,
      url: "https://ui.shadcn.com/",
      description:
        "Este conjunto de componentes UI nos dá a flexibilidade de criar interfaces consistentes e personalizadas, sem comprometer a qualidade ou a velocidade de desenvolvimento.",
    },
    {
      alt: "Vercel",
      src: toolsIcons.vercel,
      url: "https://vercel.com/",
      description:
        "Finalmente, hospedamos nossa aplicação na Vercel, uma plataforma que facilita a implantação e garante que nossa aplicação esteja sempre disponível, rápida e pronta para escalar conforme necessário.",
    },
  ];
  return (
    <main className="flex flex-col w-full max-w-6xl px-6 py-8 mx-auto gap-8">
      <h1 className="text-5xl font-bold">Como foi feito</h1>

      <p>
        Este sistema foi criado com um conjunto de tecnologias que não só
        garantem alta performance, mas também proporcionam uma experiência de
        uso fluida e agradável. Abaixo, estão as principais ferramentas que
        utilizei:
      </p>

      <div className="flex flex-col gap-2">
        {stacks.map((stack, index) => (
          <Card
            key={index}
            className="w-fit hover:opacity-70 transition-all cursor-pointer"
          >
            <CardContent className="p-8 flex gap-2 items-center">
              <Image
                src={stack.src}
                alt={stack.alt}
                width={80}
                height={80}
                className="aspect-video rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <p className="font-bold">{stack.alt}</p>

                <p className="text-sm">{stack.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
