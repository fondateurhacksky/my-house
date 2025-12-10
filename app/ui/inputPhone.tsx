'use client'

import PhoneInput from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

interface PhoneInputFieldProps {
  value: string | undefined
  onChange: (value: string | undefined) => void
  placeholder?: string
  style?:string
}

export default function PhoneInputField({
  value,
  onChange,
  placeholder = '+225 07 49 85 23 10',
  style
}: PhoneInputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <PhoneInput
        country="CI"
        international
        withCountryCallingCode
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style}
      />
    </div>
  )
}
