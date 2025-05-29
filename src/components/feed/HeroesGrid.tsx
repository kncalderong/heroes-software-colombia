import { getHeroes } from "@/helpers/CRUD/heroe";
import Slider from "./Slider";
import { vt323 } from "@/app/fonts";

export default async function HeroesGrid({
  currentPage,
  pageSize,
}: {
  currentPage: number;
  pageSize: number;
}) {
  const heroes = await getHeroes(pageSize, currentPage);
  console.log("heroes", heroes);
  return (
    <div className="container mx-auto flex flex-col space-y-4 items-center md:space-y-6 lg:space-y-8">
      <h1 className={`text-5xl ${vt323.className} uppercase text-orange-dark`}>
        Choose a Hero
      </h1>
      <Slider heroes={heroes} />
    </div>
  );
}
