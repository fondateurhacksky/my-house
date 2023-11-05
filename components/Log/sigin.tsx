'use client'
import { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { userSchema, userSchema2 } from "../../utility/utility";


export default function LoginForm(){
  return (
      <div className="flex h-screen w-screen justify-center items-center">
          <Formik
      initialValues={{
        identifier: '',
        password: '',
      }}
      validationSchema={userSchema2}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
        console.log(values);
      }}
    >
            {({ errors, touched }) => (
    <Form className='flex flex-col sm:bg-white sm:shadow-lg p-5 sm:border sm:border-orange-500 sm:w-80 justify-center	items-center p-5 '>
        <div className="mt-4 w-full">
            <Field
              type="text"
              id="identifier"
              name="identifier"
              placeholder="Num téléphone ou Nom d'Utilisateur"
              className="w-full bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-12 pl-1"
            />
            <span className="block h-8 text-red-700 text-xs">
                    {touched.identifier && errors.identifier ? errors.identifier : ' '}
            </span>
        </div>
        <div className="mt-2 w-full">
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Mot de Passe"
              className="w-full bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-12 pl-1"
            />
              <span className="block h-8 text-red-700 text-xs">
                    {touched.password && errors.password ? errors.password : ' '}
            </span>
          </div>
          <div className="my-2 w-full">
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 w-full"
              type="submit"
            >
              Se Connecter
            </button>
          </div>
        </Form>
            )}
          </Formik>
      </div>
  )
};