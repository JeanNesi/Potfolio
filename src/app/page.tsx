import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import {
  CircleHelp,
  Component,
  FileQuestion,
  PanelsTopLeft,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-6xl px-6 py-8 mx-auto">
      <Hero />

      {/* <div className="grid grid-cols-2 gap-4">
        <Card className="w-96 h-96">
          <CardContent className="flex flex-col p-6 relative items-center justify-center w-full h-full rounded-2xl ">
            <h5>Projetos</h5>
            <PanelsTopLeft size={32} />
          </CardContent>
        </Card>

        <Card className="w-96 h-96">
          <CardContent className="flex flex-col p-6 relative items-center justify-center  w-full h-full rounded-2xl ">
            <h5>Tecnologias</h5>
            <Component size={32} />
          </CardContent>
        </Card>

        <Card className="w-96 h-96">
          <CardContent className="flex flex-col p-6 relative items-center justify-center  w-full h-full rounded-2xl ">
            <h5>Sobre mim</h5>
            <CircleHelp size={32} />
          </CardContent>
        </Card>

        <Card className="w-96 h-96">
          <CardContent className="flex flex-col p-6 relative items-center justify-center  w-full h-full rounded-2xl ">
            <h5>Sobre a página</h5>
            <FileQuestion size={32} />
          </CardContent>
        </Card>
      </div> */}
    </main>
  );
}
