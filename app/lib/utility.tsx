import { object, string, ref, date} from 'yup';


export const initialValuesLog = {
  identifier: '',
  password: '',
}
export const initialValues = {
  nom: '',
  prenom: '',
  numeroTelephone: '',
  servicesProposes: '',
  dateNaissance: '',
  localite: '',
  possibiliteDormir: false,
};
export const initialValuesSign ={
  nom:'',
  prenom:'',
  tel:'',
  confirm:'',
  pwd:'',
  confirmPwd:'',
}
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




export  const posts = [{'id':1, 'slug':'/', 'title':'Accueil','display' : ''}, {'id':2, 'slug':'/blog/annonces', 'title':'Annonces','display' : ''},{'id':3,'slug':'/connexion', 'title':'Connexion', 'display' : 'sm:hidden'}, {'id':4,'slug':'/inscription', 'title':"S'inscrire", 'display' : 'sm:hidden'}]

export const logs = [{'id':1,'slug':'/connexion', 'title':'Connexion'}, {'id':2,'slug':'/inscription', 'title':"S'inscrire"}]