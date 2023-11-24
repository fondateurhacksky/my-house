import { FormikErrors,FormikTouched,Field } from "formik";
import { FormValues } from "../../../app/lib/definition";
import { useState, useEffect } from "react";




export default function InputGroup2({errors, touched, IsNext2, setIsNext2,isNext3, setIsNext3 }: 
    {errors: FormikErrors<FormValues>, touched: FormikTouched<FormValues>, 
        IsNext2: boolean, setIsNext2: React.Dispatch<React.SetStateAction<boolean>>,
        isNext3: boolean, setIsNext3: React.Dispatch<React.SetStateAction<boolean>>
    }) {

        const [isValid, setIsValid] = useState(false);
        useEffect(() => {
            if (!(errors.confirm)) {
              setIsValid(true);
            } else {
              setIsValid(false);
            }

          }, [errors]);
        
          const handlerClick = () => {
            if (!(errors.confirm )  && touched.confirm) {
                setIsNext2(!IsNext2)
                setIsNext3(!isNext3)
            }
          }
    return(
        <div className={`bg-slate-80 sm:shadow-lg flex flex-col m-3 p-5 sm:h-auto absolute sm:border sm:border-orange-200 m-3 h-80 w-96 p-5 sm:h-auto justify-center	items-center	sm:items-stretch		
        ${IsNext2 ? 'opacity-100' : 'opacity-0 transition-opacity duration-500 invisible'} 
        `} >
                  <p className="text-sm mb-2">Veillez saisie le code de confirmation recu par sms:</p>
                   <Field 
                   type="text" 
                   name="confirm" 
                   id="confirm" 
                   className=" bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-8 " 
                   placeholder="code de confirmation" 
                   />
                   <span className="block h-8 w-full text-red-700 text-xs">{touched.confirm && errors.confirm ? errors.confirm : ' '}</span>

                    <button 
                        className={`w-4/6 sm:w-full rounded bg-blue-500  text-slate-50 p-2 hover:shadow-xl 
                        ${isValid ? 'opacity-100 bg-blue-700 cursor-default	' : 'opacity-75 bg-slate-500 cursor-not-allowed'}`}
                        type="button"
                        onClick={handlerClick}
                    >
                      Next2
                     </button>
        </div>
    )

}