import { ErrorMessage, Field, useFormikContext } from 'formik';
import NumberInput from './inputNumber';

type errors = {
  numeroTelephone: string,
  prenom: string,
  tel:string,
  dateNaissance:string
}
export default function Adresse(){
    
    const { touched, errors, values } = useFormikContext<errors>();

    return(
        <div className='flex sm:flex-row flex-col sm:w-1/3 justify-center items-center sm:pl-2.5'>

            <div className="sm:w-1/2 w-[218px] ">
                <label className="pl-2 block mb-2 text-gray-700 "
                htmlFor="numeroTelephone">Numéro de téléphone :</label>
                    <NumberInput
                     name="numeroTelephone"
                     type="text"
                     value={values.tel}
                      />
                    <span className="block h-6 text-red-500 text-xs">{touched.numeroTelephone && errors.numeroTelephone ? errors.numeroTelephone : ' '}</span>
            </div>

            <div className="sm:w-1/2 w-[216px]">
                <label className="pl-2 block mb-2 text-gray-700 " htmlFor="dateNaissance" >Date de naissance</label>
                <div className="relative">
                    <Field
                    type="date"
                    id="dateNaissance"
                    name="dateNaissance"
                    className="w-full sm:w-11/12 py-2 px-2 border-2 border-slate-150 rounded focus:outline-none focus:border-blue-500 focus:invalid:border-blue-500 valid:border-green-500"
                    required
                    /> 
                </div>
                <span className="block h-6 text-red-500 text-xs">{touched.dateNaissance && errors.dateNaissance ? errors.dateNaissance : ' '}</span>
            </div>


        </div>
    )
}