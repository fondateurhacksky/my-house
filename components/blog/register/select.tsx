import Select from 'react-select';
import { communeOptions, servicesOptions } from '../../../app/lib/place-holder-data';

export default function InputSelect(){
    return (
        <div className='flex flex-col md:flex-row justify-around w-1/3'>

            <div className='w-1/2'>
            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={"Localité"}
                isSearchable={true}
                name="localité"
                options={communeOptions}
                styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderWidth:2,
                      borderColor: state.isFocused ? '#2563eb' : '#e2e8f0' ,
                      width: 205,
                      padding:2,
                      marginLeft:7,
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
            />
            </div>

            <div className=''>

            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={"Service proposé"}
                isSearchable={true}
                name="service"
                options={servicesOptions}
                styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderWidth:2,
                      borderColor: state.isFocused ? '#2563eb' : '#e2e8f0' ,
                      width: 205,
                      padding:2,
                      marginRight:16,
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
            />
            </div>

        
        </div>
    )
}