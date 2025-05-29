import { getHeroById } from "@/helpers/CRUD/heroe";
import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { vt323 } from "@/app/fonts";
import PowerStats from "./PowerStats";
import AccordionInfo from "./AccordionInfo";

export default async function Hero({ heroId }: { heroId: string }) {
  const heroData = await getHeroById(heroId);
  console.log("heroData", heroData);
  return (
    <section className="flex flex-col gap-4 text-gray-300 lg:flex-row">
      <div className="w-full lg:w-1/2 flex-col flex gap-4">
        <div className="w-full sm:w-3/4 mx-auto aspect-9/10 block relative lg:w-[450px] lg:h-[600px]">
          <Image
            src={heroData.images.lg}
            alt={heroData.name || ""}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex gap-2 w-full flex-wrap">
          <p className="text-orange-dark font-bold">Aliases:</p>
          {heroData.biography.aliases.map((alias, idx) => (
            <Badge className="bg-gray-400 text-black" key={`${alias}-${idx}`}>
              {alias}
            </Badge>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex-col flex gap-4">
        <h1
          className={`text-5xl ${vt323.className} uppercase text-orange-dark`}
        >
          {heroData.name}
        </h1>
        <PowerStats powerStats={heroData.powerstats} />
        <AccordionInfo heroData={heroData} />
      </div>
    </section>
  );
}
