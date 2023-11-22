'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { blogSchema, initialValues } from '../../../app/lib/utility';
import NavBar from '../../../app/ui/NavBar';
import PhoneInput from 'react-phone-number-input/input';


export default function RegistrationForm(){
  

  return (
    <main>
      <NavBar/>
      <Formik
        initialValues={initialValues}
        validationSchema={blogSchema}
        onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
            console.log(values);
          }}
      >
        <Form className="flex flex-col h-screen w-screen justify-center items-center">

          <div className='flex gap-2'>

          <div className="mb-4">
            <Field 
            type="text" 
            name="nom" 
            placeholder="Nom"
            className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-12 pl-1" 
            />
            <ErrorMessage name="nom" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field 
            type="text" 
            name="prenom" 
            placeholder="Prenom"
            className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-12 pl-1"
            />
            <ErrorMessage name="prenom" component="div" className="text-red-500" />
          </div>

          </div>

          <div className='flex '>

          <div className="mb-4">
            <Field type="text" id="numeroTelephone" name="numeroTelephone" placeholder="Numéro de téléphone"/>
            <ErrorMessage name="numeroTelephone" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field type="text"
             name="servicesProposes" 
             placeholder="Services proposés"/>
            <ErrorMessage name="servicesProposes" component="div" className="text-red-500" />
          </div>
          
          </div>

          <div className="mb-4">
          <label htmlFor="dateNaissance">Date de naissance </label>
            <Field type="date" id="dateNaissance" name="dateNaissance" placeholder="Date de naissance"/>
            <ErrorMessage name="dateNaissance" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field type="text" 
            name="localite" 
            placeholder="Localité"
            className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-12 pl-1"
            />
            <ErrorMessage name="localite" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label>
              Possibilité de dormir
              <Field type="checkbox" name="possibiliteDormir" />
            </label>
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            S'inscrire
          </button>
        </Form>
      </Formik>
      </main>
  );
};