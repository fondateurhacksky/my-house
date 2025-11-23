'use client'
import { Formik } from 'formik';
import { blogSchema, initialValues } from '../../../../lib/utility';
import NavBar from '../../../../ui/NavBar';
import Form from './form';

export default function RegistrationForm(){
  

  return (
    <>
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
    </>
  );
};