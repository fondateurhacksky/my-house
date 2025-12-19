'use client'

import PhoneInput from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

interface PhoneInputFieldProps {
  value: string | undefined
  onChange: (value: string | undefined) => void
  style?:string
}

export default function PhoneInputField({
  value,
  onChange,
  style
}: PhoneInputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <PhoneInput
        country="CI"
        international
        withCountryCallingCode
        value={value}
        onChange={onChange}
        className={style}
      />
    </div>
  )
}
