import { Suspense } from 'react'
import FilterPanelSkeleton from "@/app/components/skeleton/FilterPanelSkeleton";
import AnnonceClient from "@/app/ui/AnnonceClient";




export default async function Page({
  params,
}: PageProps<'/annonces/[slug]'>) {
    
  return (
        <Suspense fallback={<FilterPanelSkeleton />}>
        {params.then(({ slug }) => (
          <AnnonceClient category={slug} />
        ))}
      </Suspense>
  );
}
