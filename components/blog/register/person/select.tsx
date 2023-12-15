import { communeOptions, servicesOptions } from '../../../../app/lib/data';
import { Field, useFormikContext } from 'formik';

type SelectProps = {
  localité: string;
  service: string;
};

export default function InputSelect() {
  const {errors, touched } = useFormikContext<SelectProps>();

  return (
    <div className='flex flex-col sm:flex-row justify-around sm:max-lg:w-1/2 lg:w-1/3'>
      <div className='sm:w-1/2'>
       <Field 
       required
       as="select" 
       name="localité" 
       className="w-full sm:w-11/12  border-2 border-slate-150 focus:outline-none focus:border-blue-500  p-2 valid:border-green-500 rounded">

        <option 
        value="" 
        disabled hidden
        className="text-slate-800"
        >
          Choisissez une localité
          </option>
        {communeOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="p-2 px-4 text-gray-800 hover:bg-gray-200"

          >
            {option.label}
          </option>
        ))}
       </Field>
        <span className="block h-6 w-full text-red-700 text-xs pl-3">
          {touched.localité && errors.localité ? errors.localité : ' '}
        </span>
      </div>

      <div className='sm:w-1/2'>
      <Field 
       required
       as="select" 
       name="service" 
       className="w-full sm:w-11/12  border-2 border-slate-150 focus:outline-none focus:border-blue-500 p-2 valid:border-green-500 rounded">
        <option value="" disabled hidden>Service proposé</option>
        {servicesOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="p-2 px-4 text-gray-800 hover:bg-gray-200"

          >
            {option.label}
          </option>
        ))}
       </Field>
         <span className="block h-6  text-red-700 text-xs">
          {touched.service && errors.service ? errors.service : ' '}
        </span>
      </div>
      
    </div>
  );
}
