import { Field, useFormikContext } from 'formik';
import NumberInput from './inputNumber';

type errors = {
  tel:string,
  dateNaissance:string
}
export default function Adresse(){
    
    const { touched, errors, values } = useFormikContext<errors>();

    return(
        <div className='flex sm:flex-row flex-col sm:max-lg:w-1/2 lg:w-1/3 justify-center items-center'>

            <div className="sm:w-1/2 w-[218px] ">
                <label className="pl-1s block text-gray-700  text-sm"
                htmlFor="tel">Numéro de téléphone :</label>
                    <NumberInput
                     type="text"
                     name="tel"
                      />
                    <span className="block h-6 text-red-500 text-xs">{touched.tel && errors.tel ? errors.tel : ' '}</span>
            </div>

            <div className="sm:w-1/2 w-[216px]">
                <label className="pl-1s block text-gray-700 text-sm" htmlFor="dateNaissance" >Date de naissance</label>
                <div className="relative">
                    <Field
                    type="date"
                    name="dateNaissance"
                    id="dateNaissance"
                    className="w-full sm:w-11/12 py-2 px-2 border-2 border-slate-150 rounded focus:outline-none focus:border-blue-500 valid:border-green-500"
                    required
                    /> 
                </div>
                <span className="block h-6 text-red-500 text-xs">{touched.dateNaissance && errors.dateNaissance ? errors.dateNaissance : ' '}</span>
            </div>


        </div>
    )
}