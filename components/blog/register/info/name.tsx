import { Field, ErrorMessage } from 'formik';


export default function Name(){
    return(
         <div className='flex justify-center justify-around items-center w-1/3 h-20'>

            <div className="">
                    <Field 
                    type="text" 
                    name="nom" 
                    placeholder="Nom"
                    className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-10 " 
                    />
                    <ErrorMessage name="nom" component="div" className="text-red-500" />
            </div>

            <div className="">
                <Field 
                type="text" 
                name="prenom" 
                placeholder="Prenom"
                className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-10 "
                />
                <ErrorMessage name="prenom" component="div" className="text-red-500" />
            </div>
    </div>
    )
}