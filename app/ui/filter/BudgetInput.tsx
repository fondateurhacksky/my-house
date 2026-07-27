import { FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
  error?: FieldError;
  className: string;
};

export function BudgetInput({ register, error, className }: Props) {
  return (
    <>
      <input
        id="budget"
        type="text"
        inputMode="numeric"
        placeholder="Budget CFA"
        className={`${className} ${error ? "border-red-400" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? "budget-error" : undefined}
        {...register("budget", {
          setValueAs: (v: string) => String(v ?? "").replace(/\D/g, ""),
          validate: (v: string) => {
            if (!v) return true;
            const n = Number(v);
            if (Number.isNaN(n) || n < 0) return "Budget invalide";
            return true;
          },
        })}
      />

      <p id="budget-error" className="text-xs text-red-500 h-4 mt-1" aria-live="polite">
        {error?.message ?? ""}
      </p>
    </>
  );
}
