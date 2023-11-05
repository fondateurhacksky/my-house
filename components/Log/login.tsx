'use client';
import { Formik, Form} from "formik";
import { userSchema } from "../../utility/utility";
import  InputGroup1  from "./inputGroup/group1";
import  InputGroup2  from "./inputGroup/group2";
import  InputGroup3  from "./inputGroup/group3";
import { useState } from "react";

export default function SignupForm(){

  const [isNext1, setIsNext1] = useState(true);
  const [isNext2, setIsNext2] = useState(false);
  const [isNext3, setIsNext3] = useState(false);



  return (
          <Formik
          initialValues={
            {
              nom:'',
              prenom:'',
              tel:'',
              confirm:'',
              pwd:'',
              confirmPwd:'',
            }
          }
          validationSchema={userSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
            console.log(values);
          }}
          >
            {({ errors, touched, values}) => (
            <Form className="flex h-screen w-screen justify-center items-center">
                  
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
                
            </Form>
            )}
          </Formik>
  )
};