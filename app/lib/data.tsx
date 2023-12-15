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
    { label: 'Aide à domicile', value: 'aide domicile' },
    { label: 'Cuisinier/Cuisinière', value: 'cuisinier' },
    { label: 'Jardinier/Jardinière', value: 'jardinier' },
    { label: 'Chauffeur', value: 'chauffeur' },
    { label: 'Personnel de sécurité', value: 'securite' },
    { label: 'Service d\'autel', value: 'autel' },
  ]

  export const paymentOptions = [
    { label: 'A la tâche', value: 'A la tache' },
    { label: 'Par jour', value: 'Par jour' },
    { label: 'Par semaine', value: 'Par semaine' },
    { label: 'Par mois', value: 'Par mois' },
    { label: 'Autre', value: 'Autre' }
  ];
  export const salaryOptions = [
    { label: '0 - 50 000 Francs', value: '0-50000' },
    { label: '50 001 - 100 000 Francs', value: '50001-100000' },
    { label: '100 001 - 150 000 Francs', value: '100001-150000' },
    { label: '150 001 - 200 000 Francs', value: '150001-200000' },
    { label: '200 001 - 250 000 Francs', value: '200001-250000' }
  ];
    
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