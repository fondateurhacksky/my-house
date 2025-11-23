export default async function AnnoncesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-gray-50 py-10 px-6">
        {children}
    </section>
  );
}
