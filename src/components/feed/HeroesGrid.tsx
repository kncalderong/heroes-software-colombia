import { getHeroes } from "@/helpers/CRUD/heroe";
import Slider, { SliderSkeleton } from "./Slider";
import { vt323 } from "@/app/fonts";

import MobileCarousel from "./MobileCarousel";

export default async function HeroesGrid({
  currentPage,
  pageSize,
}: {
  currentPage: number;
  pageSize: number;
}) {
  const heroes = await getHeroes(pageSize, currentPage);
  return (
    <div className="container mx-auto flex flex-col space-y-4 items-center md:space-y-6 lg:space-y-8">
      <h1 className={`text-5xl ${vt323.className} uppercase text-orange-dark`}>
        Choose a Hero
      </h1>
      <Slider heroes={heroes} />
      <MobileCarousel heroes={heroes} />
    </div>
  );
}

export function HeroesGridSkeleton() {
  return (
    <div className="container mx-auto flex flex-col space-y-4 items-center md:space-y-6 lg:space-y-8">
      <h1 className={`text-5xl ${vt323.className} uppercase text-orange-dark`}>
        Choose a Hero
      </h1>
      <SliderSkeleton />
    </div>
  );
}
