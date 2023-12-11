import {Form as Forms} from 'formik';
import InputSelect from './select';
import CheckOption from './checked';
import Name from './info/name';
import Adresse from './info/adresse';


export default function Form(){

    return(
        <Forms className="flex flex-col h-screen w-screen justify-center items-center ">
                <Name/>
                <Adresse/>
                <InputSelect />
                <CheckOption />
                
                <button 
                type="submit" 
                className="bg-blue-500 
                text-white p-2 rounded sm:w-1/3 w-[218px] hover:bg-blue-700 hover:shadow-2xl">
                S'inscrire
                </button>
      </Forms>
    )
}