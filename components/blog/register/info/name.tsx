import { Field, useFormikContext } from 'formik';


type FormHelpers = {
    nom: string,
    prenom: string,

}

export default function Name(){
    
    const { touched, errors } = useFormikContext<FormHelpers>();
    
    return(
         <div className='flex flex-col sm:flex-row sm:max-lg:w-1/2 lg:w-1/3'>

            <div className="sm:w-1/2">
                    <Field 
                    type="text" 
                    name="nom" 
                    placeholder="Nom"
                    className="w-full sm:w-11/12  bg-white border-2 border-slate-150 rounded focus:outline-none focus:border-blue-500 px-4 py-2 valid:border-green-500" 
                    required
                    />
                    <span className="block h-5 w-4/5  text-red-500 text-xs">{touched.nom && errors.nom ? errors.nom : ' '}</span>
            </div>

            <div className="sm:w-1/2">
                <Field 
                type="text" 
                name="prenom" 
                placeholder="Prenom"
                className=" w-full sm:w-11/12  bg-white border-2 rounded  border-slate-150 focus:outline-none focus:border-blue-500 px-4 py-2 valid:border-green-500" 
                required
                />
                <span className="block h-5 w-4/5  text-red-500 text-xs">{touched.prenom && errors.prenom ? errors.prenom : ' '}</span>
            </div>

        </div>
    )
}