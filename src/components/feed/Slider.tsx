import { Heroe } from "@/types/heroe";
import Image from "next/image";

export default function Slider({ heroes }: { heroes: Heroe[] }) {
  return (
    <section className="flex w-[600px] h-[430px]">
      {heroes.map((hero) => (
        <div
          className="w-0 grow object-cover opacity-80 duration-500 ease-in-out hover:cursor-pointer hover:w-[300px] hover:opacity-100 contrast-125 bg-gray-500"
          key={hero.id}
        >
          <Image
            src={hero.images.lg}
            alt={hero.name || ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </section>
  );
}
