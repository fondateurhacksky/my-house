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
        <div className='flex md:flex-row flex-col w-1/3 pl-2.5'>

            <div className="w-1/2">
                <label htmlFor="numeroTelephone">Numéro de téléphone :</label>
                    <NumberInput
                     name="numeroTelephone"
                     type="text"
                     value={values.tel}
                      />
                    <span className="block h-8 w-full text-red-700 text-xs">{touched.numeroTelephone && errors.numeroTelephone ? errors.numeroTelephone : ' '}</span>
            </div>

            <div className="w-1/2">
                <label htmlFor="dateNaissance" className="text-gray-700">Date de naissance</label>
                <div className="relative">
                    <input
                    type="date"
                    id="dateNaissance"
                    name="dateNaissance"
                    className=" w-11/12 py-2 px-4 border-2 border-slate-150 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <span className="block h-8 w-full text-red-700 text-xs">{touched.dateNaissance && errors.dateNaissance ? errors.dateNaissance : ' '}</span>
            </div>


        </div>
    )
}