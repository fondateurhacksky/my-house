export default function ListSkeleton() {
  return (
    <ul
      className="
        absolute top-1/2 -translate-y-1/2 
        left-1/2 -translate-x-1/2 
        flex gap-6
      "
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i}>
          <div
            className="
              w-32 h-10 
              rounded 
              border-2 border-slate-300
              bg-slate-200/70
              animate-pulse
            "
          />
        </li>
      ))}
    </ul>
  );
}
