import Select from 'react-select';
import { communeOptions, servicesOptions } from '../../../app/lib/place-holder-data';

export default function InputSelect(){
    return (
        <div className='flex '>

            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={"Localité"}
                isSearchable={true}
                name="color"
                options={communeOptions}
                styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? '#3498db' : 'grey' ,
                      width: 200,
                      margin: 20
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

            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={"Service proposé"}
                isSearchable={true}
                name="color"
                options={servicesOptions}
                styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? '#3498db' : 'grey' ,
                      width: 200,
                      margin: 20
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
    )
}