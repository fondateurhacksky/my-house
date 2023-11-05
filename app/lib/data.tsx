'use server'
import { revalidatePath } from 'next/cache'


export async function createTodo(prevState: any, formData: FormData) {
  try {
    // await createItem(formData.get('todo'))
    return revalidatePath('/')
  } catch (e) {
    return { message: 'Failed to create' }
  }
}