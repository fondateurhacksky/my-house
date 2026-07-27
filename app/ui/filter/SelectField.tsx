"use client";
import Select from "react-select";
import { Controller, Control, FieldError } from "react-hook-form";

type Option = { value: string; label: string };

const selectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    borderRadius: "0.6rem",
    borderColor: state.isFocused ? "#22c55e" : "#cbd5e1",
    boxShadow: "none",
    minHeight: "38px",
    fontSize: "13px",
    cursor: "pointer",
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: "0 8px",
  }),
};

type Props = {
  control: Control<any>;
  name: string;
  options: Option[];
  placeholder: string;
  error?: FieldError;
  menuPlacement?: "auto" | "top" | "bottom";
};

export function SelectField({
  control,
  name,
  options,
  placeholder,
  error,
  menuPlacement,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          instanceId={name}
          inputId={name}
          options={options}
          placeholder={placeholder}
          styles={selectStyles}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          menuPlacement={menuPlacement}
          menuPosition="fixed"
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
    />
  );
}
