export default async function AnnoncesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-10 px-6 h-screen">
        {children}
    </section>
  );
}
