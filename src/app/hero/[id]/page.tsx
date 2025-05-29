import Hero from "@/components/feed/Hero";

export default async function HeroPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="w-full max-w-[1024px] mx-auto p-6  lg:py-8 lg:px-0">
      <Hero heroId={id} />
    </div>
  );
}
