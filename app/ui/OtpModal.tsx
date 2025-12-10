'use client'

import { useEffect, useState } from "react"

interface OtpModalProps {
  phone: string
  onClose: () => void
  onEditPhone: () => void
}

export default function OtpModal({
  phone,
  onClose,
  onEditPhone,
}: OtpModalProps) {
  const [otp, setOtp] = useState('')
  const [timer, setTimer] = useState(60)

  // Countdown 1 minute
  useEffect(() => {
    if (timer <= 0) return
    const interval = setInterval(() => {
      setTimer((t) => t - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  const resendCode = () => {
    setTimer(60)
    console.log('Relancer OTP pour', phone)
  }

  return (
    <>
      {/* BACKDROP FLOU */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 animate-slideDown">

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>

          <h2 className="text-xl font-bold text-center text-slate-800">
            Code de confirmation
          </h2>

          <p className="text-sm text-slate-500 text-center mt-1">
            Un code a été envoyé au numéro:
          </p>

          <p className="text-center font-medium mt-1 text-slate-800">
            {phone}
          </p>

          {/* OTP INPUT */}
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="______"
            className="mt-6 w-full text-center tracking-widest text-lg border border-gray-300 rounded-md py-2 focus:outline-none focus:border-gray-700"
          />

          {/* CONFIRM */}
          <button
            className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Confirmer
          </button>

          {/* RESEND */}
          <div className="mt-4 text-center text-sm text-gray-500">
            {timer > 0 ? (
              <>
                Renvoyer le code dans{" "}
                <span className="font-medium">{timer}s</span>
              </>
            ) : (
              <button
                onClick={resendCode}
                className="text-indigo-600 hover:underline"
              >
                Renvoyer le code
              </button>
            )}
          </div>

          {/* EDIT PHONE */}
          <button
            onClick={onEditPhone}
            className="mt-3 w-full text-sm text-gray-500 hover:underline"
          >
            Modifier le numéro
          </button>
        </div>
      </div>
    </>
  )
}
