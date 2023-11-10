'use server'
import { revalidatePath } from 'next/cache'
import prisma from './prisma'
import { z } from 'zod'

const schema = z.object({
        nom: z.string().min(1),
        prenom: z.string().min(1),
        number: z.string().min(1),
        password: z.string().min(1),
      })

export async function createTodo(form: FormData) {

        const data = schema.parse({
          nom: form.get('nom'),
          prenom: form.get('prenom'),
          number: form.get('tel'),
          password: form.get('pwd')
        })
      const newser = await prisma.user.create({
        data: data
      })
      console.log('User created successfully') 
          return revalidatePath('/')

  // try {

        
   
  //   //   await prisma.user.create({
  //   //   data: {
  //   //     nom: form.get('nom') as string,
  //   //     prenom: form.get('prenom') as string,
  //   //     number: form.get('number') as string,
  //   //     password: form.get('password') as string
  //   //   },
  //   // })
  //   console.log('User created successfully') 
  //   // return newUser;
  //   return revalidatePath('/')
  // } catch (e) {
  //   return e
  // }
}