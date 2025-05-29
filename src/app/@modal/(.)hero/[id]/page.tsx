import Hero from "@/components/feed/Hero";
import { ParallelModal } from "@/components/global/ParallelModal";

export default async function HeroPageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <ParallelModal>
      <Hero heroId={id} />
    </ParallelModal>
  );
}
