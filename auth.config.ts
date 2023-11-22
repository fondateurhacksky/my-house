import { getUser } from "./app/lib/data";
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from "next-auth"
import { z } from 'zod';

export default {
    providers: [Facebook, Google, Credentials({

        async authorize(credentials, req) {
          const parsedCredentials = z
            .object({ identifier: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
          
          if (parsedCredentials.success) {
            // Any object returned will be saved in `user` property of the JWT
            const { identifier, password } = parsedCredentials.data;
            const user = await getUser(identifier);
            if (!user) return null;
            // const passwordsMatch =  bcrypt.compare(password, user.password);
            // console.log(`${user.password} === ${password}`)
            // if (user.password === password) return user; // Si les mots de passe ne correspondent pas, retournez null
            
  
            console.log(user)
            return user
          }
            // If you return null then an error will be displayed advising the user to check their details.
            // console.log(parsedCredentials.error)
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      })
    ],
    callbacks: {
      authorized({ request, auth }) {
        const { pathname } = request.nextUrl
        if (pathname === "/user") return !!auth
        return true
      },
    },
    pages:{
      signIn: '/connexion',
  }
} satisfies NextAuthConfig