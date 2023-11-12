'use server'
import { revalidatePath } from 'next/cache'
import prisma from './prisma'

import { z } from 'zod';
const schema = z.object({
        name: z.string().min(1),
        firstName: z.string().min(1),
        number: z.string().min(1),
        password: z.string().min(1),
      })

export async function createTodo(form: FormData) {

        const data = schema.parse({
          name: form.get('nom'),
          firstName: form.get('prenom'),
          number: form.get('tel'),
          password: form.get('pwd')
        })
      const newser = await prisma.user.create({
        data: data
      })
      return newser;
          // return revalidatePath('/')
}