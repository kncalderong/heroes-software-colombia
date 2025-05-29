import HeroesGrid from "@/components/feed/HeroesGrid";
import PaginationBlock from "@/components/global/PaginationBlock";
import { getHeroesTotalPages } from "@/helpers/CRUD/heroe";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const PAGE_SIZE = 6;
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getHeroesTotalPages(PAGE_SIZE);

  return (
    <main className="w-full space-y-4 md:space-y-6 lg:space-y-8 mt-4 md:mt-6 lg:mt-8">
      <Suspense key={currentPage + PAGE_SIZE} fallback={<div>Loading...</div>}>
        <HeroesGrid currentPage={currentPage} pageSize={PAGE_SIZE} />
      </Suspense>
      <div>
        <PaginationBlock totalPages={totalPages} />
      </div>
    </main>
  );
}
