import { signIn } from 'next-auth/react';

export default function FacebookProvider({ text } : { text: string }) {
    return(
        <button
        type='button'
          className="text-base bg-slate-50 text-black hover:text-white font-semibold p-2 border rounded-md hover:bg-blue-900 w-full mb-2 hover:shadow-lg "
          onClick={() => {
             signIn('facebook', {
              callbackUrl: 'http://localhost:3000/user', // Ton URL de callback
            });
          }}
        >
          {text} Facebook
        </button>
    )
}