import { Field } from "formik";
import { formLog } from "../../../app/lib/definition";
import { FormikErrors, FormikTouched } from "formik";


export default function InputG2({errors, touched}:
    {errors: FormikErrors<formLog>, touched: FormikTouched<formLog>,
   }){
    return(
        <div className="mt-6 w-full">
         <div className="relative">
            <Field
              type="text"
              id="password"
              name="password"
              className="peer w-full bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-300 focus:border-blue-300 h-6"
              required
            />

            <label
              htmlFor="identifier"
              className="peer-focus:bottom-10 peer-valid:bottom-10 peer-valid:text-sm peer-focus:opacity-75 peer-valid:opacity-75 peer-focus:text-sm text-base opacity-50 absolute transition-all duration-500
              left-0 pointer-events-none"
            >
              Mot de passe
            </label>

            <span className="block h-4 text-red-700 text-xs">
              {touched.identifier && errors.identifier ? errors.identifier : ' '}
            </span>
        </div>

          </div>
    )
}