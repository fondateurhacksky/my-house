import { signIn } from 'next-auth/react';

export default function GoogleProvider(){
    return(
        <button
        type='button'
          className="text-sm bg-slate-300 text-black hover:text-white font-semibold p-2 border rounded-md hover:bg-blue-900 w-full mb-2 
          hover:bg-gradient-to-r from-red-700  to-blue-700"
          onClick={() => {
             signIn('google', {
              callbackUrl: 'http://localhost:3000/user', // Ton URL de callback
            });
            // signOut()
          }}
        >
          Se Connecter avec Google
 </button>
    )
}