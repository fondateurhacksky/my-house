import Select from 'react-select';
import { communeOptions, servicesOptions } from '../../../app/lib/data';
import { useFormikContext } from 'formik';

type SelectProps = {
  localité: string;
  service: string;
};

export default function InputSelect() {
  const { setFieldValue, handleBlur, errors, touched } = useFormikContext<SelectProps>();

  const handleLocaliteChange = (selectedOption: any) => {
    setFieldValue('localité', selectedOption.value); // Mettre à jour la valeur de 'localité'
  };

  const handleServiceChange = (selectedOption: any) => {
    console.log(selectedOption);
    setFieldValue('service', selectedOption.value); // Mettre à jour la valeur de 'service'
  };

  return (
    <div className='flex flex-col sm:flex-row justify-around sm:w-1/3'>
      <div className='sm:w-1/2'>
        <Select
          className="w-[220px] sm:w-[205px] sm:ml-2 "
          classNamePrefix="select"
          placeholder={"Localité"}
          isSearchable={true}
          name="localité"
          onChange={handleLocaliteChange} // Utiliser la fonction de rappel personnalisée
          onBlur={handleBlur('localité')} // Gérer l'événement onBlur pour 'localité'
          options={communeOptions}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderWidth:2,
              borderColor: state.isFocused ? '#22c55e' : '#e2e8f0',
              padding:3,
            }),
            placeholder: (base) => ({
              ...base,
              fontSize: '1em',
              color: 'grey',
              fontWeight: 400,
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            borderWidth:20,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: '#3498db',
            },
          })}
          required
        />
        <span className="block h-6 w-full text-red-700 text-xs pl-3">
          {touched.localité && errors.localité ? errors.localité : ' '}
        </span>
      </div>

      <div className='sm:w-1/2'>
        <Select
          className="basic-single w-[220px] sm:w-[204px] ml-1"
          classNamePrefix="select"
          placeholder={"Service proposé"}
          isSearchable={true}
          name="service"
          onChange={handleServiceChange} 
          onBlur={handleBlur('service')} 
          options={servicesOptions}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderWidth:2,
              borderColor: state.isFocused ? '#22c55e' : '#e2e8f0',
              padding:3,
            }),
            placeholder: (base) => ({
              ...base,
              fontSize: '1em',
              color: 'grey',
              fontWeight: 400,
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: '#3498db',
            },
          })}
          required
        />
         <span className="block h-6  text-red-700 text-xs">
          {touched.service && errors.service ? errors.service : ' '}
        </span>
      </div>
    </div>
  );
}
