import Image from "next/image";

export function Projects() {
  return (
    <div className="flex flex-col gap-6 w-full py-20">
      <h1 className="text-5xl font-bold">Projetos</h1>

      <p className="text-gray-300 text-base">
        Conheça alguns dos meus projetos.
      </p>

      <div className="w-80 h-52 relative rounded-lg overflow-hidden cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1589466725882-f47191476e8c?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="transform transition-transform duration-300 ease-in-out hover:scale-150 object-cover"
        />
      </div>
    </div>
  );
}
