import {Form} from 'formik';
import InputSelect from './select';
import CheckOption from './checked';
import PersonalInfo from './info/infoPerso';



export default function Forms(){
    return(
        <Form className="flex flex-col h-screen w-screen justify-center items-center">
                <PersonalInfo />
                <InputSelect />
                <CheckOption />
                
                <button 
                type="submit" 
                className="bg-blue-500 
                text-white p-2 rounded w-1/3 hover:bg-blue-800 shadow-2xl">
                S'inscrire
                </button>
      </Form>
    )
}