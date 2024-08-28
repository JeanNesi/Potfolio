import { Hero } from "@/components/hero";
import { Projects } from "@/components/project";
import { Stacks } from "@/components/stacks";

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-6xl p-6 mx-auto">
      <Hero />

      <Stacks />
      {/* <Projects /> */}
    </main>
  );
}
