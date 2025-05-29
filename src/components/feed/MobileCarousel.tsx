import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heroe } from "@/types/heroe";
import Image from "next/image";
import Link from "next/link";

export default function MobileCarousel({ heroes }: { heroes: Heroe[] }) {
  return (
    <Carousel className="w-4/6 max-w-xs lg:hidden">
      <CarouselContent>
        {heroes.map((hero) => (
          <CarouselItem key={hero.id}>
            <Link
              href={`hero/${hero.id}`}
              className="w-full aspect-square h-full block relative"
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary border-none text-orange-dark" />
      <CarouselNext className="bg-primary border-none text-orange-dark" />
    </Carousel>
  );
}
