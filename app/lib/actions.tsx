'use server'
import { revalidatePath } from 'next/cache'
import prisma from '../../db'


import { z } from 'zod';
const schema = z.object({
        name: z.string().min(1),
        number: z.string().min(1),
        password: z.string().min(1),
      })

export async function createTodo(form: FormData) {

  try{
          const data = schema.parse({
            name: `${form.get('nom')} ${form.get('prenom')}`,
            number: form.get('tel'),
            password: form.get('pwd')
          })

      if (!data.number || !data.password) {
          throw new Error('Number or password is empty');
      }
      await prisma.user.create({
        data: data
      })
      
    }catch(e){
      return {
        message: `Database Error: Failed to Created. ${e}`,
      };
    }
        
      // return newser;
      // return revalidatePath('/')
}