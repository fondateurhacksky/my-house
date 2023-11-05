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
          <div className="mb-4">
            <label htmlFor="nom">Nom</label>
            <Field type="text" id="nom" name="nom" />
            <ErrorMessage name="nom" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="prenom">Prénom</label>
            <Field type="text" id="prenom" name="prenom" />
            <ErrorMessage name="prenom" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="numeroTelephone">Numéro de téléphone</label>
            <Field type="text" id="numeroTelephone" name="numeroTelephone" />
            <ErrorMessage name="numeroTelephone" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="servicesProposes">Services proposés</label>
            <Field type="text" id="servicesProposes" name="servicesProposes" />
            <ErrorMessage name="servicesProposes" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="dateNaissance">Date de naissance</label>
            <Field type="date" id="dateNaissance" name="dateNaissance" />
            <ErrorMessage name="dateNaissance" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="localite">Localité</label>
            <Field type="text" id="localite" name="localite" />
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