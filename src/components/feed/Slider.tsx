import { Heroe } from "@/types/heroe";
import Image from "next/image";
import Link from "next/link";

export default function Slider({ heroes }: { heroes: Heroe[] }) {
  return (
    <section className="hidden lg:flex w-[800px] h-[600px]">
      {heroes.map((hero) => (
        <Link
          href={`hero/${hero.id}`}
          className="w-0 grow object-cover opacity-80 duration-500 ease-in-out hover:cursor-pointer hover:w-[400px] hover:opacity-100 contrast-125 "
          key={hero.id}
          scroll={false}
        >
          <Image
            src={hero.images.lg}
            alt={hero.name || ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      ))}
    </section>
  );
}

export function SliderSkeleton() {
  return (
    <section className="flex w-[800px] h-[600px] rounded-xl overflow-hidden">
      {Array.from({ length: 6 }).map((_, index: number) => (
        <div
          className="w-0 grow object-cover hover:w-[400px]  animate-pulse bg-gray-800"
          key={index}
        ></div>
      ))}
    </section>
  );
}
