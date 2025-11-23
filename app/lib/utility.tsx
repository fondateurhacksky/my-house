import { object, string, ref, date} from 'yup';


export const initialValuesLog = {
  identifier: '',
  password: '',
}
export const initialValues = {
  nom: '',
  prenom: '',
  tel: '',
  dateNaissance: '',
  localité: '',
  service:'',
  paiement: '',
  prix: '',
  dormie: '',
}
export const blogSchema = object().shape({
  nom: string().required('Le nom est requis'),
  prenom: string().required('Le prénom est requis'),
  tel: string().required('Le numéro de téléphone est requis'),
  dateNaissance: date().required('La date de naissance est requise'),
  localité: string().required('Veillez selectionner votre localité'),
  service: string().required('Prière de choisir le service que vous offrez'),
  paiement: string()
    .oneOf(['À la tâche', 'Par jour', 'Par semaine', 'Par mois', 'Autre'])
    .required('Le mode de paiement est requis'),
  prix: string()
    .oneOf([
      '0-50000',
      '50001-100000',
      '100001-150000',
      '150001-200000',
      '200001-250000',
    ])
    .required('La tranche de prix est requise'),  
  dormie: string().oneOf(['OUI', 'NON']).required('La valeur de dormie est requise'),
});

export const initialValuesSign ={
  nom:'',
  prenom:'',
  tel:'',
  confirm:'',
  pwd:'',
  confirmPwd:'',
}


export default blogSchema;


export const userSchema = object().shape({
    nom: string().required('Le nom est obligatoire'),
    prenom: string().required('Le prénom est obligatoire'),
    tel: string().matches(/^(?:\+)?\d{3}(?:\s)?\d{10,11}$/,
    'le numero n\'est pas valide'
    ).required('Le numéro de téléphone est obligatoire'),
    confirm: string().matches(/^\d{6}$/
    ,
    'Le code de confirmation n\'est pas valide'
    ).required('Le numéro de téléphone est obligatoire'),
    pwd: string().min(6).required('Le mot de passe est obligatoire'),
    confirmPwd: string().oneOf([ref('pwd')],'Password not match').min(6).required('Le mot de passe est obligatoire'),
  })
  export const userSchema2 = object().shape({
    identifier: string().required('Le nom est obligatoire'),
    password: string().min(6).required('Le mot de passe est obligatoire'),
  })




export  const navLinks = [{'id':1, 'slug':'/', 'title':'Accueil','display' : ''}, {'id':2, 'slug':'/annonces', 'title':'Annonces','display' : ''},{'id':3, 'slug':'/blog/annonces/mobilier', 'title':'Mobilier','display' : ''},{'id':4,'slug':'/connexion', 'title':'Connexion', 'display' : 'sm:hidden'}, {'id':5,'slug':'/inscription', 'title':"S'inscrire", 'display' : 'sm:hidden'}]
export const footerLinks = [
  { id: 1, title: "À propos de nous", slug: "/a-propos" },
  { id: 2, title: "Pourquoi nous", slug: "/pourquoi-nous" },
  { id: 3, title: "Comment nous fonctionnons", slug: "/comment-nous-fonctionnons" },
  { id: 4, title: "Nos contacts", slug: "/nos-contacts" },
];

export const logs = [{'id':1,'slug':'/connexion', 'title':'Connexion'}, {'id':2,'slug':'/inscription', 'title':"S'inscrire"}]
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


// export const navItems = [
//   { href: "/", label: "Accueil", icon: CiHome },
//   { href: "/blog/annonces", label: "Annonces" },
//   { href: "/interests", label: "Mes intérêts" },
//   { href: "/profile", label: "Mon profil" },
//   { href: "/reclamation", label: "Reclamations" }
// ];