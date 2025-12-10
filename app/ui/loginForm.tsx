'use client'

import { useState } from 'react'
import PhoneInputField from './inputPhone'
import OtpModal from './OtpModal'

export default function LoginForm() {
  const [phone, setPhone] = useState<string | undefined>()
  const [showOtp, setShowOtp] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) return

    console.log('Envoyer OTP à', phone)
    setShowOtp(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="text-sm text-slate-700 relative top-4">
          Numéro de téléphone
        </label>
        <PhoneInputField
          value={phone}
          onChange={setPhone}
          style="bg-transparent focus:bg-transparent border border-gray-300 rounded-md px-3 py-2
          focus:outline-none focus:border-gray-700
        "
        />

        <button
          type="submit"
          disabled={!phone}
          className="
            w-full bg-[#16A34A] text-white py-2 rounded-md font-medium
            hover:bg-[#15803D] transition
            disabled:opacity-50
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
            setPhone(undefined)
          }}
        />
      )}
    </>
  )
}
