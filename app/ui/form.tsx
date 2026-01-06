'use client'

import { useEffect, useId, useState } from 'react'
import 'react-phone-number-input/style.css'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input/input'
import Select, { StylesConfig } from 'react-select'
import { CITIES } from '../lib/data'
import { FormValues } from '../lib/definition'

type Option = { value: string; label: string }

export default function Form() {
  const selectId = useId()
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalTarget(document.body)
  }, [])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      nom: '',
      prenom: '',
      phone: '',
      email: '',
      commune: '',
      localisation: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('✅ Données formulaire :', data)
  }

  const onInvalid = (formErrors: any) => {
    console.log('❌ FORM INVALID :', formErrors)
  }

  // Normalisation des options
  const cityOptions: Option[] = (CITIES as any[]).map((c) => {
    if (typeof c === 'string') return { value: c, label: c }
    if (c?.value && c?.label) return c as Option
    const label = c?.label ?? c?.name ?? String(c)
    return { value: label, label }
  })

  const selectStyles: StylesConfig<Option, false> = {
    container: (base) => ({
      ...base,
      width: '100%',
    }),
    control: (base, state) => ({
      ...base,
      width: '100%',
      borderRadius: 6,
      borderColor: state.isFocused ? '#22c55e' : '#cbd5e1',
      boxShadow: 'none',
      minHeight: 44,
      fontSize: 13,
      cursor: 'pointer',
      backgroundColor: 'transparent',
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 10px',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#cbd5e1',
    }),
    input: (base) => ({
      ...base,
      color: '#e2e8f0',
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
      className="w-3/5 max-w-[500px] bg-[#3A3751] rounded-xl p-6 shadow-xl"
    >
      <h1 className="text-2xl font-bold text-white text-center uppercase tracking-wider">
        Rejoignez MyHouse
      </h1>

      <div className="w-24 h-1 bg-white mx-auto rounded-full mt-2" />

      <p className="text-sm text-white text-center mt-2 mb-3">
        Inscrivez-vous et accédez à nos services.
      </p>

      {/* NOM + PRÉNOM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <input
            {...register('nom', {
              required: 'Le nom est requis',
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                message: 'Les chiffres ne sont pas autorisés',
              },
            })}
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? 'nom-error' : undefined}
            placeholder="Nom"
            className="w-full bg-transparent border-b border-slate-300 text-white text-sm
            placeholder-slate-300 focus:outline-none hover:border-indigo-300 focus:border-indigo-500"
          />
          <p id="nom-error" className="text-xs text-red-400 h-4 w-full font-medium">
            {errors.nom?.message ?? ''}
          </p>
        </div>

        <div>
          <input
            {...register('prenom', {
              required: 'Le prénom est requis',
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                message: 'Les chiffres ne sont pas autorisés',
              },
            })}
            aria-invalid={!!errors.prenom}
            aria-describedby={errors.prenom ? 'prenom-error' : undefined}
            placeholder="Prénom"
            className="w-full bg-transparent border-b border-slate-300 text-white text-sm
            placeholder-slate-300 focus:outline-none hover:border-indigo-300 focus:border-indigo-500"
          />
          <p id="prenom-error" className="text-xs text-red-400 h-4 w-full font-medium">
            {errors.prenom?.message ?? ''}
          </p>
        </div>
      </div>

      {/* TÉLÉPHONE */}
      <label className="text-sm text-slate-300 my-1 block">Numéro de téléphone</label>

      <Controller
        name="phone"
        control={control}
        rules={{
          required: 'Numéro de téléphone requis',
          validate: (v) => {
            const cleaned = (v ?? '').replace(/\s/g, '')
            return cleaned.length >= 13 || 'Numéro invalide'
          },
        }}
        render={({ field }) => (
          <PhoneInput
            country="CI"
            international
            withCountryCallingCode
            value={field.value}
            onChange={(value) => field.onChange(value ?? '')}
            onBlur={field.onBlur}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="w-full bg-transparent text-white border focus:border-indigo-500 border-gray-300 rounded-md p-2 focus:outline-none"
          />
        )}
      />
      <p id="phone-error" className="text-xs text-red-400 h-4 w-full font-medium">
        {errors.phone?.message ?? ''}
      </p>

      {/* EMAIL (facultatif) */}
      <input
        type="email"
        {...register('email', {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Email invalide',
          },
        })}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? 'email-error' : undefined}
        className="w-full bg-transparent border-b border-slate-300 text-white text-sm
        placeholder-slate-300 focus:outline-none hover:border-indigo-300 focus:border-indigo-500"
        placeholder="Email (facultatif)"
      />
      <p id="email-error" className="text-xs text-red-300 h-4 w-full font-medium">
        {errors.email?.message ?? ''}
      </p>

      {/* SELECT (COMMUNE) */}
      <div className="mt-1">
        <Controller
          name="commune"
          control={control}
          rules={{ required: 'La commune est requise' }}
          render={({ field }) => {
            const selected = cityOptions.find((o) => o.value === field.value) ?? null

            return (
              <>
                <Select
                  instanceId={selectId}
                  inputId="Commune"
                  options={cityOptions}
                  placeholder="Commune"
                  styles={selectStyles}
                  value={selected}
                  onChange={(opt) => field.onChange(opt?.value ?? '')}
                  onBlur={field.onBlur}
                  menuPortalTarget={portalTarget ?? undefined}
                  menuPosition="fixed"
                  aria-invalid={!!errors.commune}
                  aria-describedby={errors.commune ? 'ville-error' : undefined}
                />
                <p id="ville-error" className="text-xs text-red-500 h-4 w-full font-medium">
                  {errors.commune?.message ?? ''}
                </p>
              </>
            )
          }}
        />
      </div>

      {/* LOCALISATION */}
      <textarea
        rows={3}
        maxLength={120}
        {...register('localisation', { required: 'La localisation est requise' })}
        aria-invalid={!!errors.localisation}
        aria-describedby={errors.localisation ? 'localisation-error' : undefined}
        className="w-full bg-transparent border border-slate-400 rounded-md p-3 text-sm
        text-white placeholder-slate-300 focus:outline-none focus:border-indigo-400 hover:border-indigo-500 resize-none"
        placeholder="Localisation (ex: Riviera 2, près du carrefour...)"
      />
      <p id="localisation-error" className="text-xs text-red-500 h-4 w-full font-medium">
        {errors.localisation?.message ?? ''}
      </p>

      <p className="text-sm text-center text-white mt-2">
        Vos informations restent strictement confidentielles.
      </p>

      <button
        type="submit"
        onClick={() => alert('🟦 Click Envoyez')}
        className="w-full mt-2 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600
        hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl text-sm font-medium shadow-md
        hover:shadow-xl transition-all hover:-translate-y-1 tracking-wider"
      >
        Envoyez
      </button>
    </form>
  )
}
