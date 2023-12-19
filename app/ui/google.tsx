import { signIn } from 'next-auth/react';

export default function GoogleProvider({ text } : { text: string }) {
    return(
        <button
        type='button'
          className="text-base bg-slate-50 text-black hover:text-green-900 font-semibold p-2 border rounded-md hover:bg-gradient-to-br from-red-500 via-yellow-500 to-yellow-400 w-full mb-2 hover:shadow-lg
          "
          onClick={() => {
             signIn('google', {
              callbackUrl: 'http://localhost:3000/user', // Ton URL de callback
            });
          }}
        >
          {text} Google
 </button>
    )
}