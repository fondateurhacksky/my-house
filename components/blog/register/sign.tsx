'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { blogSchema, initialValues } from '../../../utility/utility';


export default function RegistrationForm(){
  

  return (
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
          <div className='flex '>

          <div className="mb-4">
            <Field type="text" id="nom" name="nom" placeholder="Nom" />
            <ErrorMessage name="nom" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field type="text" id="prenom" name="prenom" placeholder="Prenom"/>
            <ErrorMessage name="prenom" component="div" className="text-red-500" />
          </div>

          </div>

          <div className='flex '>

          <div className="mb-4">
            <Field type="text" id="numeroTelephone" name="numeroTelephone" placeholder="Numéro de téléphone"/>
            <ErrorMessage name="numeroTelephone" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field type="text" id="servicesProposes" name="servicesProposes" placeholder="Services proposés"/>
            <ErrorMessage name="servicesProposes" component="div" className="text-red-500" />
          </div>
          
          </div>

          <div className="mb-4">
          <label htmlFor="dateNaissance">Date de naissance </label>
            <Field type="date" id="dateNaissance" name="dateNaissance" placeholder="Date de naissance"/>
            <ErrorMessage name="dateNaissance" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field type="text" id="localite" name="localite" placeholder="Localité"/>
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
  );
};