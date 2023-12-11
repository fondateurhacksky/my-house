'use client'
import { Formik } from 'formik';
import { blogSchema, initialValues } from '../../../app/lib/utility';
import NavBar from '../../../app/ui/NavBar';
import Form from './form';

export default function RegistrationForm(){
  

  return (
    <main>
      <NavBar/>
      <Formik
        initialValues={initialValues}
        validationSchema={blogSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
          }}
      >
       <Form />
      </Formik>
      </main>
  );
};