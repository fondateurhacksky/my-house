'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input/input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import OtpModal from './OtpModal'

type FormValues = {
  phone: string
}

export default function LoginForm() {
  const [showOtp, setShowOtp] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      phone: '',
    },
  })

  const phone = watch('phone')

  const onSubmit = (data: FormValues) => {
    console.log('Numéro valide envoyé :', data.phone)
    setShowOtp(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

       <div className='flex flex-col'>

             <label className="text-sm text-slate-700">
          Numéro de téléphone
        </label>

        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Le numéro est obligatoire',
            validate: (value) =>
              isValidPhoneNumber(value || '')
                ? true
                : 'Numéro invalide',
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country="CI"
              international
              withCountryCallingCode
              className="
                bg-transparent border border-gray-500 rounded-md px-3 py-2
                focus:outline-none focus:border-gray-700
              "
            />
          )}
        />

        {/* Message d’erreur */}
        <p className="text-xs text-red-500 h-4">
          {errors.phone?.message}
        </p>



       </div>
        <button
          type="submit"
          className="
            w-full bg-green-600 text-white py-2 rounded-md font-medium
            hover:bg-[#15803D] transition
          "
        >
          Recevoir un code
        </button>

      </form>

      {showOtp && phone && (
        <OtpModal
          phone={phone}
          onClose={() => setShowOtp(false)}
          onEditPhone={() => {
            setShowOtp(false)
            reset()
          }}
        />
      )}
    </>
  )
}
