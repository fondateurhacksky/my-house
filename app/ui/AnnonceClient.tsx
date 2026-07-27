'use client'
import FilterPanel from "@/app/ui/FilterPanel";
// import { servicesByCategory } from "@/app/lib/data";
import { useState } from "react";


export default function AnnonceClient({
  category,
}: {
  category: string;
}) {
     const [data, setData] = useState<any[]>([]);
  return (
        <FilterPanel data={data} setData={setData} category={category}/>
  );
}
