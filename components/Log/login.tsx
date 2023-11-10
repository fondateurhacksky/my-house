'use client'
import { Formik, Form} from "formik";
import { userSchema, initialValuesSign } from "../../utility/utility";
import  InputGroup1  from "./inputGroup/group1";
import  InputGroup2  from "./inputGroup/group2";
import  InputGroup3  from "./inputGroup/group3";
import { useState } from "react";
import { createTodo } from "../../app/lib/data";
import { useTransition } from "react";
export default function SignupForm(){

  const [isNext1, setIsNext1] = useState(true);
  const [isNext2, setIsNext2] = useState(false);
  const [isNext3, setIsNext3] = useState(false);

 const [isPending, startTransition] = useTransition()


  return (
          <Formik
          initialValues={initialValuesSign}
          validationSchema={userSchema}
          
          onSubmit={async (values, actions) => {
          // const form = new FormData();

          // form.append("nom", values.nom);
          // form.append("prenom", values.prenom);
          // form.append("number", values.tel);
          // form.append("password", values.pwd);

          //   startTransition(() => {

          //     createTodo(form)
          //   })

                        // createTodo(FormData)

            

          }}
          >
            {({ errors, touched, values}) => (
            <form action={createTodo} className="flex h-screen w-screen justify-center items-center">
                  
                <InputGroup1 
                values={values}
                errors={errors} touched={touched} 
                isNext1={isNext1} setIsNext1={setIsNext1} 
                isNext2={isNext2} setIsNext2={setIsNext2}
                />
                <InputGroup2 
                errors={errors} 
                touched={touched} 
                IsNext2={isNext2} 
                setIsNext2={setIsNext2}
                isNext3={isNext3} setIsNext3={setIsNext3}
                />
                <InputGroup3 
                errors={errors} 
                touched={touched}
                IsNext3={isNext3} setIsNext3={setIsNext3} 
                 />
                
            </form>
            )}
          </Formik>
  )
};