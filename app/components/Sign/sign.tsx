'use client'
import { Formik, Form} from "formik";
import { userSchema, initialValuesSign } from "../../lib/utility";
import  InputGroup1  from "./inputGroup/group1";
import  InputGroup2  from "./inputGroup/group2";
import  InputGroup3  from "./inputGroup/group3";
import { useState, useRef } from "react";
import { createTodo } from "../../lib/actions";
import NavBar from "../../ui/NavBar";


export default function SignupForm(){

  const [isNext1, setIsNext1] = useState(true);
  const [isNext2, setIsNext2] = useState(false);
  const [isNext3, setIsNext3] = useState(false);

  const formRef = useRef(null);

  return (
    <main>
          <Formik
          initialValues={initialValuesSign}
          validationSchema={userSchema}
          

          onSubmit={async () => {
            if(formRef.current){
              const form = new FormData(formRef.current);
              createTodo(form).then((e) => console.log(e)).catch(() => alert('An error occurred. Please try again later.'));
            }
          }}
          >
            <Form ref={formRef} className="flex h-screen w-screen justify-center items-center">
                  
                <InputGroup1 
                isNext1={isNext1} setIsNext1={setIsNext1} 
                isNext2={isNext2} setIsNext2={setIsNext2}
                />
                <InputGroup2 
                IsNext2={isNext2} 
                setIsNext2={setIsNext2}
                isNext3={isNext3} setIsNext3={setIsNext3}
                />
                <InputGroup3 
                IsNext3={isNext3} setIsNext3={setIsNext3} 
                 />
                
            </Form>
          </Formik>
          </main>
  )
};