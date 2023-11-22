import prisma from '../../db'



export async function getUser(email?: string | undefined, number? : string | undefined) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          OR: [
            {
              email: email, // Remplacez userEmail par l'email de l'utilisateur que vous recherchez
            },
            {
              number: number, // Remplacez userPhoneNumber par le numéro de téléphone de l'utilisateur que vous recherchez
            },
          ],
        },
      });
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }