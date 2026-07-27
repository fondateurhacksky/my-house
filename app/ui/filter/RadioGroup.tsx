import { UseFormRegister } from "react-hook-form";

type Option<T extends string> = { label: string; value: T };

type Props<T extends string> = {
  name: string;
  options: Option<T>[];
  register: UseFormRegister<any>;
};

export function RadioGroup<T extends string>({ name, options, register }: Props<T>) {
  return (
    <div className="flex justify-between text-xs" role="radiogroup" aria-labelledby={`${name}-label`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-1">
          <input type="radio" value={option.value} className="accent-green-500" {...register(name)} />
          {option.label}
        </label>
      ))}
    </div>
  );
}
