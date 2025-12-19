"use client";
import { SERVICES, AGE_RANGES, WORK_TIMES, CITIES } from "../lib/data";
import { useState } from "react";
import Select from "react-select";

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
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: "0 8px",
  }),
};

/* =======================
   Composant
======================= */
export default function FilterPanel({
  category,
  hasSearched,
  onSearch,
}: {
  category: string;
  hasSearched: boolean;
  onSearch: (filters: any) => void;
}) {
  const [filters, setFilters] = useState({
    city: null as any,
    budget: "",
    service: null as any,
    genderPreference: "indifferent",
    ageRange: null as any,
    workTime: null as any,
  });

  const handleChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const input =
    "border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-400 bg-white";

  return (
    <aside
      className={`
        transition-all duration-300
        bg-white border-2 border-slate-300 shadow-xl
        rounded-xl px-4 py-4
        flex flex-col
        w-full mx-auto
        ${hasSearched ? "max-w-[300px]" : "max-w-6xl"}
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
        <div className="bg-slate-50 rounded-xl px-3 py-3 space-y-2">
          <p className="font-semibold text-slate-700 text-xs">
            📍 Votre lieu de résidence & budget
          </p>

          <div className="flex gap-2">
            <div className="w-1/2">
              <Select
                options={CITIES}
                placeholder="Commune"
                styles={selectStyles}
                value={filters.city}
                onChange={(e) => handleChange("city", e)}
              />
            </div>

            <input
              type="text"
              inputMode="numeric"
              placeholder="Budget CFA"
              className={`w-1/2 ${input}`}
              value={filters.budget}
              onChange={(e) =>
                handleChange("budget", e.target.value.replace(/\D/g, ""))
              }
            />
          </div>
        </div>

        {/* Profil recherché */}
        <div className="bg-slate-50 rounded-xl px-3 py-3 space-y-2">
          <p className="font-semibold text-slate-700 text-xs">
              Profil recherché • Genre • Tranche d’âge
          </p>


          <Select
            options={SERVICES}
            placeholder="Profil recherché"
            styles={selectStyles}
            value={filters.service}
            onChange={(e) => handleChange("service", e)}
          />

          {/* Préférence de genre */}
          <div className="border border-slate-300 rounded-lg px-3 py-2 bg-white">
            <div className="flex justify-between text-xs">
              {[
                { label: "Femme", value: "femme" },
                { label: "Homme", value: "homme" },
                { label: "Indifférent", value: "indifferent" },
              ].map((g) => (
                <label key={g.value} className="flex items-center gap-1">
                  <input
                    type="radio"
                    checked={filters.genderPreference === g.value}
                    onChange={() =>
                      handleChange("genderPreference", g.value)
                    }
                    className="accent-green-500"
                  />
                  {g.label}
                </label>
              ))}
            </div>
          </div>

          <Select
            options={AGE_RANGES}
            placeholder="Tranche d’âge"
            styles={selectStyles}
            value={filters.ageRange}
            onChange={(e) => handleChange("ageRange", e)}
            menuPlacement="top"
            menuPosition="fixed"

          />
        </div>

        {/* Temps de travail */}
        <div className="bg-slate-50 rounded-xl px-3 py-3 space-y-2">
          <p className="font-semibold text-slate-700 text-xs">
            ⏰ Temps de travail
          </p>

          <Select
            options={WORK_TIMES}
            placeholder="Jour / nuit / dort sur place"
            styles={selectStyles}
            value={filters.workTime}
            onChange={(e) => handleChange("workTime", e)}
            menuPlacement="top"
            menuPosition="fixed"
          />
        </div>
      </div>

      {/* Bouton */}
      <div className="mt-3">
          <button
            onClick={() =>
              onSearch({
                ...filters,
                city: filters.city?.value,
                service: filters.service?.value,
                ageRange: filters.ageRange?.value,
                workTime: filters.workTime?.value,
              })
            }
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl font-semibold transition"
          >
            Afficher les offres
          </button>
      </div>
    </aside>
  );
}
