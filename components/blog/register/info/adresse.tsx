import { Field, ErrorMessage } from 'formik';

export default function Adresse(){
    return(
        <div className='flex w-1/3 justify-around h-20'>

            <div className="flex flex-col ">
                <label htmlFor="adresse">Numéro de téléphone </label>
                    <Field type="text" id="numeroTelephone" name="numeroTelephone" />
                    <ErrorMessage name="numeroTelephone" component="div" className="text-red-500" />
            </div>

            <div className="flex flex-col ">
                    <label htmlFor="dateNaissance">Date de naissance </label>
                    <Field type="date" id="dateNaissance" name="dateNaissance" placeholder="Date de naissance"/>
                    <ErrorMessage name="dateNaissance" component="div" className="text-red-500" />
            </div>

        </div>
    )
}