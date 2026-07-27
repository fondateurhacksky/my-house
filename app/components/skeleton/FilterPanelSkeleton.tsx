export default function FilterPanelSkeleton() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl rounded-2xl border bg-white p-6 shadow-sm">
        {/* Titre */}
        <div className="mb-5 flex flex-col items-center gap-3">
          <div className="h-4 w-[70%] animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-[55%] animate-pulse rounded bg-gray-200" />
        </div>

        {/* Card interne */}
        <div className="rounded-2xl bg-gray-50 p-5">
          {/* Bloc 1 */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-56 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
              <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
            </div>
          </div>

          {/* Bloc 2 */}
          <div className="mb-6">
            <div className="mb-3">
              <div className="h-4 w-64 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
              <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
            </div>

            {/* Radios */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 rounded-xl border bg-white px-3 py-3"
                >
                  <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

          {/* Bloc 3 */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
          </div>

          {/* Bouton */}
          <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
