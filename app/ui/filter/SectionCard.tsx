import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function SectionCard({ title, children }: Props) {
  return (
    <fieldset className="bg-slate-50 rounded-xl p-3 space-y-2">
      <legend className="font-semibold text-slate-700 text-xs">{title}</legend>
      {children}
    </fieldset>
  );
}
