import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heroe } from "@/types/heroe";

export default function AccordionInfo({ heroData }: { heroData: Heroe }) {
  if (!heroData) return;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Appearance</AccordionTrigger>
        <AccordionContent>
          {heroData.biography.firstAppearance}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Publisher</AccordionTrigger>
        <AccordionContent>{heroData.biography.publisher}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Alignment</AccordionTrigger>
        <AccordionContent>{heroData.biography.alignment}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Occupation</AccordionTrigger>
        <AccordionContent>{heroData.work.occupation}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
