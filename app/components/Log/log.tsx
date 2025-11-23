'use client'
import { useRef } from 'react';
import { Formik, Form} from "formik";
import { userSchema2, initialValuesLog } from "../../lib/utility";
import { signIn } from 'next-auth/react';
import NavBar from '../../ui/NavBar';
import InputG1 from './InputGp/group1';
import InputG2 from './InputGp/groupe2';
import LogBtn from './logBtn';
import FacebookProvider from '../../ui/facebook';
import GoogleProvider from '../../ui/google';

export default function LoginForm(){

  const formRef = useRef(null);


  return (
    <main>
      <NavBar />
      <div className="flex flex-col h-screen w-screen justify-center items-center sm:bg-white ">
        <Formik
          initialValues={initialValuesLog}
          validationSchema={userSchema2}
          onSubmit={async (values, actions) => {
            
            if(formRef.current){
              const form = new FormData(formRef.current);
              signIn('credentials', {
                identifier: form.get('identifier'), 
                password: form.get('password'),
                callbackUrl: 'http://localhost:3000/user'
              });
            }
          }}
        >
          {({ errors, touched }) => (
          <Form ref={formRef} className='flex flex-col w-80 justify-center items-center p-2 py-6 rounded border-2 border-slate-300'>
              <InputG1 errors={errors} touched={touched} />
              <InputG2 errors={errors} touched={touched} />
              <LogBtn/> 
              <span 
              className="text-black-500 text-xs mt-4 cursor-pointer	"
              >Mot de passe oublié ?
              </span>      
          </Form>
            
          )}
        </Formik>
        <div className="flex items-center w-80 my-2">
              <div className="flex-1 h-0.5 bg-slate-700"></div>
              <p className="text-slate-700 px-4">or</p>
              <div className="flex-1 h-0.5 bg-slate-700"></div>
        </div>

      <div className=" flex flex-col justify-around	 w-80">
        <FacebookProvider text={"Se connecter avec "}/>
        <GoogleProvider text={"Se connecter avec "}/>
      </div>
      </div>
    </main>
  )
};
