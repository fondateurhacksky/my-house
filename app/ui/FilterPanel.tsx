"use client";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { SERVICES, AGE_RANGES, WORK_TIMES, CITIES } from "../lib/data";

/* =======================
   Styles react-select
======================= */
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

type Option = { value: string; label: string };

type FilterFormValues = {
  city: Option | null;
  budget: number | null; // chiffres en string
  service: Option | null;
  genderPreference: "femme" | "homme" | "indifferent";
  ageRange: Option | null;
  workTime: Option | null;
};

export default function FilterPanel({ data, setData, category }: { data:any, setData: any, category:string}) {

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterFormValues>({
    mode: "onBlur",
    defaultValues: {
      city: null,
      budget: null,
      service: null,
      genderPreference: "indifferent",
      ageRange: null,
      workTime: null,
    },
  });

  const input =
    "border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-300 bg-white hover:border-gray-400 cursor-pointer";

  const onValid = (values: FilterFormValues) => {
    const payload = {
      ...values,
      city: values.city?.value ?? null,
      service: values.service?.value ?? null,
      ageRange: values.ageRange?.value ?? null,
      workTime: values.workTime?.value ?? null,
      budget: values.budget ? Number(values.budget) : null,
    };

    console.log("✅ RHF values (brut) :", values);
    console.log("✅ Payload (transformé) :", payload);

  };

  const onInvalid = (errs: any) => {
    console.log("❌ Erreurs RHF :", errs);
  };

  const handleClick = () => {
    handleSubmit(onValid, onInvalid)();
  };

  return (
    <form
      aria-label="Filtrer les offres"
      className={`
        bg-white border-2 border-slate-400 shadow-xl rounded-xl px-4 py-4 flex flex-col w-full
        transition-[max-width,transform,margin] duration-500 ease-in-out will-change-[max-width,transform]
        ${data.length > 0  ? "max-w-[320px] mx-0 translate-x-0" : "max-w-6xl mx-auto translate-x-0"}
        lg:${data.length > 0  ? "translate-x-0" : "translate-x-0"}
      `}
    >
      {/* Titre */}
      <div className="mb-3 text-center">
        <p className="text-sm font-medium text-slate-800">
          Veuillez renseigner vos besoins afin que nous puissions vous proposer le profil idéal.
        </p>
      </div>

      <div className="space-y-2 text-sm">
        {/* Localisation & budget */}
        <fieldset className="bg-slate-50 rounded-xl p-3 space-y-2">
          <legend className="font-semibold text-slate-700 text-xs">
            📍 Votre lieu de résidence & budget
          </legend>

          <div className="flex gap-2">
            {/* Commune */}
            <div className="w-1/2">
              <label className="sr-only" htmlFor="city">
                Commune
              </label>

              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select
                    instanceId="city"
                    inputId="city"
                    options={CITIES}
                    placeholder="Commune"
                    styles={selectStyles}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                  />
                )}
              />

              <p id="city-error" className="text-xs text-red-500 h-4 mt-1" aria-live="polite">
                {errors.city?.message ?? ""}
              </p>
            </div>

            {/* Budget */}
            <div className="w-1/2">
              <label className="sr-only" htmlFor="budget">
                Budget en CFA
              </label>

              <input
                id="budget"
                type="text"
                inputMode="numeric"
                placeholder="Budget CFA"
                className={`w-full ${input} ${errors.budget ? "border-red-400" : ""}`}
                aria-invalid={!!errors.budget}
                aria-describedby={errors.budget ? "budget-error" : undefined}
                {...register("budget", {
                  setValueAs: (v) => String(v ?? "").replace(/\D/g, ""),
                  validate: (v) => {
                    if (!v) return true;
                    const n = Number(v);
                    if (Number.isNaN(n)) return "Budget invalide";
                    if (n < 0) return "Budget invalide";
                    return true;
                  },
                })}
              />

              <p id="budget-error" className="text-xs text-red-500 h-4 mt-1" aria-live="polite">
                {errors.budget?.message ?? ""}
              </p>
            </div>
          </div>
        </fieldset>

        {/* Profil recherché */}
        <fieldset className="bg-slate-50 rounded-xl px-3 py-3 space-y-2">
          <legend className="font-semibold text-slate-700 text-xs">
            Profil recherché • Genre • Tranche d’âge
          </legend>

          <div className="flex gap-2">
            {/* Profil */}
            <div className="w-1/2">
              <label className="sr-only" htmlFor="service">
                Profil recherché
              </label>

              <Controller
                name="service"
                control={control}
                rules={{ required: "Choisis un profil" }}
                render={({ field }) => (
                  <Select
                    instanceId="service"
                    inputId="service"
                    options={SERVICES}
                    placeholder="Profil recherché"
                    styles={selectStyles}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  />
                )}
              />

              <p id="service-error" className="text-xs text-red-500 h-4 mt-1" aria-live="polite">
                {errors.service?.message ?? ""}
              </p>
            </div>

            {/* Age range */}
            <div className="w-1/2">
              <label className="sr-only" htmlFor="ageRange">
                Tranche d’âge
              </label>

              <Controller
                name="ageRange"
                control={control}
                render={({ field }) => (
                  <Select
                    instanceId="ageRange"
                    inputId="ageRange"
                    options={AGE_RANGES}
                    placeholder="Tranche d’âge"
                    styles={selectStyles}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    menuPlacement="top"
                    menuPosition="fixed"
                    aria-invalid={!!errors.ageRange}
                    aria-describedby={errors.ageRange ? "ageRange-error" : undefined}
                  />
                )}
              />

              <p id="ageRange-error" className="text-xs text-red-500 h-4 mt-1" aria-live="polite">
                {errors.ageRange?.message ?? ""}
              </p>
            </div>
          </div>

          {/* Préférence de genre */}
          <div className="border border-slate-300 rounded-lg p-3 bg-white hover:border-gray-400">
            <p className="sr-only" id="genderPreference-label">
              Préférence de genre
            </p>

            <div className="flex justify-between text-xs" role="radiogroup" aria-labelledby="genderPreference-label">
              {[
                { label: "Femme", value: "femme" as const },
                { label: "Homme", value: "homme" as const },
                { label: "Indifférent", value: "indifferent" as const },
              ].map((g) => (
                <label key={g.value} className="flex items-center gap-1">
                  <input type="radio" value={g.value} className="accent-green-500" {...register("genderPreference")} />
                  {g.label}
                </label>
              ))}
            </div>
          </div>
        </fieldset>

        {/* Temps de travail */}
        <fieldset className="bg-slate-50 rounded-xl px-3 py-3 space-y-2">
          <legend className="font-semibold text-slate-700 text-xs">⏰ Temps de travail</legend>

          <label className="sr-only" htmlFor="workTime">
            Temps de travail
          </label>

          <Controller
            name="workTime"
            control={control}
            render={({ field }) => (
              <Select
                instanceId="workTime"
                inputId="workTime"
                options={WORK_TIMES}
                placeholder="Jour / nuit / dort sur place"
                styles={selectStyles}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                menuPlacement="top"
                menuPosition="fixed"
                aria-invalid={!!errors.workTime}
                aria-describedby={errors.workTime ? "workTime-error" : undefined}
              />
            )}
          />

          <p id="workTime-error" className="text-xs text-red-500 h-4" aria-live="polite">
            {errors.workTime?.message ?? ""}
          </p>
        </fieldset>
      </div>

      {/* Bouton */}
      <div className="mt-3">
        <button
          type="button"
          onClick={handleClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl font-semibold transition"
        >
          Afficher les offres
        </button>
      </div>
    </form>
  );
}
