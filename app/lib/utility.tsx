// ===============================
// IMPORTS
// ===============================
import { z } from "zod";


// ===============================
// INITIAL VALUES (inchangés)
// ===============================

export const initialValuesLog = {
  identifier: '',
  password: '',
};

export const initialValues = {
  nom: '',
  prenom: '',
  tel: '',
  dateNaissance: '',
  localité: '',
  service: '',
  paiement: '',
  prix: '',
  dormie: '',
};

export const initialValuesSign = {
  nom: '',
  prenom: '',
  tel: '',
  confirm: '',
  pwd: '',
  confirmPwd: '',
};


// ===============================
// BLOG SCHEMA → ZOD
// ===============================

export const blogSchema = z.object({
  nom: z.string().min(1, 'Le nom est requis'),
  prenom: z.string().min(1, 'Le prénom est requis'),
  tel: z.string().min(1, 'Le numéro de téléphone est requis'),

  dateNaissance: z.string().min(1, 'La date de naissance est requise'),

  localité: z.string().min(1, 'Veillez selectionner votre localité'),

  service: z.string().min(1, 'Prière de choisir le service que vous offrez'),

  paiement: z.enum(
    ['À la tâche', 'Par jour', 'Par semaine', 'Par mois', 'Autre'],
    { required_error: 'Le mode de paiement est requis' }
  ),

  prix: z.enum(
    [
      '0-50000',
      '50001-100000',
      '100001-150000',
      '150001-200000',
      '200001-250000',
    ],
    { required_error: 'La tranche de prix est requise' }
  ),

  dormie: z.enum(['OUI', 'NON'], {
    required_error: 'La valeur de dormie est requise',
  }),
});


// ===============================
// USER SCHEMA → ZOD
// ===============================

export const userSchema = z.object({
  nom: z.string().min(1, 'Le nom est obligatoire'),
  prenom: z.string().min(1, 'Le prénom est obligatoire'),

  tel: z
    .string()
    .regex(/^(?:\+)?\d{3}(?:\s)?\d{10,11}$/, "Le numéro n'est pas valide")
    .min(1, 'Le numéro de téléphone est obligatoire'),

  confirm: z
    .string()
    .regex(/^\d{6}$/, 'Le code de confirmation n\'est pas valide')
    .min(1, 'Le numéro de téléphone est obligatoire'),

  pwd: z.string().min(6, 'Le mot de passe est obligatoire'),

  confirmPwd: z.string().min(6, 'Le mot de passe est obligatoire'),
})
.refine((data) => data.pwd === data.confirmPwd, {
  message: "Password not match",
  path: ["confirmPwd"],
});


// ===============================
// USER LOGIN SCHEMA (userSchema2) → ZOD
// ===============================

export const userSchema2 = z.object({
  identifier: z.string().min(1, 'Le nom est obligatoire'),
  password: z.string().min(6, 'Le mot de passe est obligatoire'),
});


// ===============================
// NAVIGATION LINKS (inchangés)
// ===============================

export const navLinks = [
  { id: 1, slug: '/', title: 'Accueil', display: '' },
  { id: 2, slug: '/annonces', title: 'Annonces', display: '' },
  { id: 3, slug: '/blog/annonces/mobilier', title: 'Mobilier', display: '' },
];

export const footerLinks = [
  { id: 1, title: "À propos de nous", slug: "/a-propos" },
  { id: 2, title: "Pourquoi nous", slug: "/pourquoi-nous" },
  { id: 3, title: "Comment nous fonctionnons", slug: "/comment-nous-fonctionnons" },
  { id: 4, title: "Nos contacts", slug: "/nos-contacts" },
];


export const annLinks = [
  {
    title: "Services à Domicile",
    icon: "👤",
    link: "/annonces/services",
    description:
      "Trouvez des chauffeurs, aides-ménagères, nounous, cuisiniers, jardiniers, gardiens et employés polyvalents pour vos besoins à domicile.",
  },
  {
    title: "Immobilier",
    icon: "🏠",
    link: "/annonces/immobilier",
    description:
      "Découvrez des maisons, appartements, studios, résidences meublées, terrains, boutiques et espaces à louer ou acheter.",
  },
  {
    title: "Véhicules & Engins",
    icon: "🛞",
    link: "/annonces/vehicules",
    description:
      "Louez des voitures, motos, camions, tricycles, taxis, ou véhicules professionnels pour vos déplacements ou activités.",
  },
  {
    title: "Matériel & Équipements",
    icon: "🛠️",
    link: "/annonces/materiels",
    description:
      "Accédez à de la location d’outils, machines, matériels de chantier, équipements professionnels, sonorisation et plus.",
  },
];


// ===============================
// TYPES AUTOMATIQUES (super utile !)
// ===============================

export type BlogSchemaType = z.infer<typeof blogSchema>;
export type UserSchemaType = z.infer<typeof userSchema>;
export type UserSchema2Type = z.infer<typeof userSchema2>;
