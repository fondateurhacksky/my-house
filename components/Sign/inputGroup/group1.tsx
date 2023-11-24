import { Field } from "formik";
import { FormikErrors, FormikTouched } from "formik";
import { FormValues } from "../../../app/lib/definition";
import { useState, useEffect } from "react";
import PhoneInputField from "../../inputPhone";



export default function InputGroup1({errors, touched, isNext1, setIsNext1, isNext2, setIsNext2, values}:
   {errors: FormikErrors<FormValues>, touched: FormikTouched<FormValues>,
    isNext1: boolean, setIsNext1: React.Dispatch<React.SetStateAction<boolean>>,
    isNext2: boolean, setIsNext2: React.Dispatch<React.SetStateAction<boolean>>,
    values: FormValues
  }) {


        const [isValid, setIsValid] = useState(false);
        const [focusedInputs, setFocusedInputs] = useState({
          nom: false,
          prenom: false,
          tel: false,
      });

        useEffect(() => {
          
            if (!(errors.nom || errors.prenom || errors.tel) && focusedInputs.nom && focusedInputs.prenom && focusedInputs.tel) {
              setIsValid(true);
            } else {
              setIsValid(false);
            }

          },[errors.nom, errors.prenom, errors.tel, focusedInputs.nom, focusedInputs.prenom, focusedInputs.tel]);
          
          const handlerClick = () => {
            if (!(errors.nom || errors.prenom || errors.tel) && touched.nom && touched.prenom && touched.tel) {
              setIsNext1(!isNext1)
              setIsNext2(!isNext2)
            }
          }
          const handleFocus = (fieldName: string) => {
            setFocusedInputs((prevFocusedInputs) => ({
                ...prevFocusedInputs,
                [fieldName]: true,
            }));
        };


    return(
        <div className={`flex flex-col bg-slate-80 sm:shadow-lg p-3 absolute sm:border sm:border-orange-200 m-3 h-80 sm:w-96 p-5  sm:h-auto justify-center	items-center sm:items-stretch			
        ${isNext1 ? 'opacity-100 visible transition-opacity ease-in-out duration-500' : ' opacity-0 invisible'}
        `} >

                    <Field 
                    type="text" 
                    name="nom" 
                    id="nom" 
                    placeholder="Nom" 
                    className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-10 "
                    onFocus={() => handleFocus("nom")}
                    />
                    <span className="block h-8 w-full text-red-700 text-xs">{touched.nom && errors.nom ? errors.nom : ' '}</span>

                    <Field 
                    type="text" 
                    name="prenom" 
                    id="prenom" 
                    placeholder="Prenom" 
                    className=" bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-10 "
                    onFocus={() => handleFocus("prenom")}
                    />
                    <span className=" bg-inherit block h-8  w-full text-red-700  text-xs">{touched.prenom && errors.prenom ? errors.prenom : ' '}</span>

                     <PhoneInputField
                     name="tel"
                     type="text"
                     value={values.tel}
                     handleFocus={handleFocus}
                      />

                    <span className="block h-8  w-full text-red-700 text-xs">{touched.tel && errors.tel ? errors.tel : ''}</span>

                    <button 
                        className={`w-full sm:w-full text-slate-50 p-2 hover:shadow-xl my-5 
                        ${isValid ? 'opacity-100 bg-blue-700 cursor-default	' : 'opacity-75 bg-slate-500 cursor-not-allowed	'}`} 
                        type="button"
                        onClick={handlerClick}
                    >
                      Etape suivante
                     </button>
                </div>
    )

}