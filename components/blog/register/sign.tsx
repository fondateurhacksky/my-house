'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { blogSchema, initialValues } from '../../../app/lib/utility';
import NavBar from '../../../app/ui/NavBar';
import Forms from './form';

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
       <Forms />
      </Formik>
      </main>
  );
};