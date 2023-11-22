import { signIn } from 'next-auth/react';

export default function FacebookProvider(){
    return(
        <button
        type='button'
          className="text-sm bg-slate-300 text-black hover:text-white font-semibold p-2 border rounded-md hover:bg-blue-900 w-full mb-2"
          onClick={() => {
             signIn('facebook', {
              callbackUrl: 'http://localhost:3000/user', // Ton URL de callback
            });
          }}
        >
          Se Connecter avec Facebook
 </button>
    )
}