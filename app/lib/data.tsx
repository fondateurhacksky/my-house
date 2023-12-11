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
  

  export const communeOptions = [
    { label: 'Abobo', value: 'Abobo' },
    { label: 'Adjamé', value: 'Adjamé' },
    { label: 'Cocody', value: 'Cocody' },
    { label: 'Yopougon', value: 'Yopougon' },
    { label: 'Marcory', value: 'Marcory' },
    { label: 'Treichville', value: 'Treichville' },
    { label: 'Plateau', value: 'Plateau' },
    { label: 'Koumassi', value: 'Koumassi' },
    { label: 'Atécoubé', value: 'Atécoubé' },  
  ];
  export const servicesOptions = [
    { label: 'Service de ménage', value: 'menage' },
    { label: 'Garde d\'enfants (Nounou)', value: 'nounou' },
    { label: 'Aide à domicile', value: 'aide_domicile' },
    { label: 'Cuisinier/Cuisinière', value: 'cuisinier' },
    { label: 'Jardinier/Jardinière', value: 'jardinier' },
    { label: 'Chauffeur', value: 'chauffeur' },
    { label: 'Personnel de sécurité', value: 'securite' },
    { label: 'Service d\'autel', value: 'autel' },
  ]
  // export const servicesOptions = [
  //   {
  //     label: 'Services liés à la maison',
  //     options: [
  //       { label: 'Service de ménage', value: 'menage' },
  //       { label: 'Garde d\'enfants (Nounou)', value: 'nounou' },
  //       { label: 'Aide à domicile', value: 'aide_domicile' },
  //       { label: 'Cuisinier/Cuisinière', value: 'cuisinier' },
  //       { label: 'Jardinier/Jardinière', value: 'jardinier' },
  //     ],
  //   },
  //   {
  //     label: 'Services résidentiels',
  //     options: [
  //       { label: 'Chauffeur', value: 'chauffeur' },
  //       { label: 'Personnel de sécurité', value: 'securite' },
  //     ],
  //   },
  //   {
  //     label: 'Autres services',
  //     options: [
  //       { label: 'Service d\'autel', value: 'autel' },
  //       // Ajoutez d'autres services ici...
  //     ],
  //   },
  // ];