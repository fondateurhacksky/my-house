import { object, string, ref, date} from 'yup';

export const initialValues = {
  nom: '',
  prenom: '',
  numeroTelephone: '',
  servicesProposes: '',
  dateNaissance: '',
  localite: '',
  possibiliteDormir: false,
};

export const blogSchema = object().shape({
  nom: string().required('Le nom est requis'),
  prenom: string().required('Le prénom est requis'),
  numeroTelephone: string().required('Le numéro de téléphone est requis'),
  servicesProposes: string().required('Les services proposés sont requis'),
  dateNaissance: date().required('La date de naissance est requise'),
  localite: string().required('La localité est requise'),
});

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

export interface PhoneInputFieldProps {
  value: string;
  name: string;
  type: string;
  handleFocus: (fieldName: string) => void;
}

// export interface FormValues   {
//     nom: string;
//     prenom: string;
//     tel: string;
//     confirm: string;
//     pwd: string;
//     confirmPwd: string;
// }

export const ads = [
  {
    nom: 'Toure',
    prenom: 'Siaka',
    age: 45,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/siaka.jpg',
  },
  {
    nom: 'Coulibaly',
    prenom: 'Adama',
    age: 35,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/adama.png',
  },
  {
    nom: 'Wilfrid',
    prenom: 'Yao',
    age: 30,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/yao.png',
  },
  {
    nom: 'Ouattara',
    prenom: 'Remi',
    age: 25,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/remi.png',
  },
  {
    nom: 'Divine',
    prenom: 'Grace',
    age: 30,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/divine.png',
  },
  {
    nom: 'Dame',
    prenom: 'Emma',
    age: 40,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/ema.png',
  },
  {
    nom: 'Toure',
    prenom: 'Siaka',
    age: 45,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/siaka.jpg',
  },
  {
    nom: 'Coulibaly',
    prenom: 'Adama',
    age: 35,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/adama.png',
  },
  {
    nom: 'Wilfrid',
    prenom: 'Yao',
    age: 30,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/yao.png',
  },
  {
    nom: 'Ouattara',
    prenom: 'Remi',
    age: 25,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/remi.png',
  },
  {
    nom: 'Divine',
    prenom: 'Grace',
    age:18,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/divine.png',
  },
  {
    nom: 'Dame',
    prenom: 'Emma',
    age:22,
    description: 'Ceci est la description de l\'annonce 1.',
    imageUrl: '/users/ema.png',
  },
 // Ajoutez d'autres annonces ici
];

export const ageOptions = [
  { label: 'Tout age', value: "all" },
  { label: '18-24 ans', value: "18-24"},
  { label: '25-34 ans', value: "25-34"},
  { label: '35-44+ ans', value: "35-44"},
];

export const genderOptions = [
  { label: 'Homme & Femme', value: "all" },
  { label: 'Femme', value: 'F'},
  { label: 'Homme', value: 'M'},
];
export const religionOptions = [
  { label: 'Musulman & Chretion', value: "all" },
  { label: 'Chretien', value: 'CR'},
  { label: 'Musulman', value: 'M'},
  { label: 'Autre', value: 'A'},
];

export  const posts = [{'id':1, 'slug':'/', 'title':'Accueil','display' : ''}, {'id':2, 'slug':'/blog/annonces', 'title':'Annonces','display' : ''},{'id':3,'slug':'/connexion', 'title':'Connexion', 'display' : 'sm:hidden'}, {'id':4,'slug':'/inscription', 'title':"S'inscrire", 'display' : 'sm:hidden'}]

export const logs = [{'id':1,'slug':'/connexion', 'title':'Connexion'}, {'id':2,'slug':'/inscription', 'title':"S'inscrire"}]