import { Field, useFormikContext } from 'formik';


type errors = {
    nom: string,
    prenom: string,

}

export default function Name(){
    
    const { touched, errors } = useFormikContext<errors>();
    
    return(
         <div className='flex flex-col md:flex-row w-1/3 pl-2.5'>

            <div className="w-1/2">
                    <Field 
                    type="text" 
                    name="nom" 
                    placeholder="Nom"
                    className="pl-2 w-11/12 bg-white border-2 rounded  border-slate-150 focus:outline-none focus:border-blue-500 px-4 py-2" 
                    />
                    <span className="block h-8 w-full text-red-700 text-xs">{touched.nom && errors.nom ? errors.nom : ' '}</span>
            </div>

            <div className="w-1/2">
                <Field 
                type="text" 
                name="prenom" 
                placeholder="Prenom"
                className="w-11/12 pl-2 bg-white border-2 rounded  border-slate-150 focus:outline-none focus:border-blue-500 px-4 py-2" 
                />
                <span className="block h-8 w-full text-red-700 text-xs">{touched.prenom && errors.prenom ? errors.prenom : ' '}</span>
            </div>

        </div>
    )
}