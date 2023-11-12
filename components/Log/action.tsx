'use server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()



export async function createTodo(formData: FormData) {
  try {

      const schema = z.object({
              name: z.string().min(1),
              firstName: z.string().min(1),
              number: z.string().min(1),
              password: z.string().min(1),
            })
        
            const data = schema.parse({
              nom: formData.get('nom'),
              prenom: formData.get('prenom'),
              number: formData.get('number'),
              password: formData.get('password')
            })
   
    const newUser = await prisma.user.create({
      data: data,
    })
    console.log('User created successfully') 
    // return newUser;
    return revalidatePath('/')
  } catch (e) {
    return e
  }
}