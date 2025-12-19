import { servicesByCategory } from "@/app/lib/data";
import AnnonceClient from "@/app/ui/AnnonceClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const services = servicesByCategory[slug] || [];

  return (
    <AnnonceClient
      category={slug}
      services={services}
    />
  );
}
