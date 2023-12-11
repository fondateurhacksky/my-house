'use client'
import { useState } from "react";
import Select from 'react-select';
import { ageOptions, genderOptions, religionOptions} from '../../app/lib/place-holder-data';
import { clsx }  from 'clsx'
import { usePathname } from 'next/navigation'
import { useContext } from "react";
import { FilterContext } from '../../app/lib/context'




export default function FilterBar(){
  
  const [age, setAge] = useState('all');
  const [gender, setGender] = useState('all');
  const [salary, setsalary] = useState('all');
  const [searchBar, setSearchBar] = useState(false);
  const pathname = usePathname();
  const filter = useContext(FilterContext);


    return(
        <div className={clsx(`absolute shadow-lg flex flex-wrap shadow-slate-500/40 bg-[#ffffff] border-r border-slate-300 justify-center left-52 top-20 h-auto`,filter,
     !(pathname === '/blog/annonces') && 'hidden'
        )}> 
        <div>
             <Select 
              options={ageOptions}
              placeholder={"Preference d'age"}
              name="gender" 
              id="p"
              instanceId="p"
              // onChange={(option) =>setGender(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 240,
                  margin: 20
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
                  fontWeight: 300,
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

        <div>
            <Select 
              options={genderOptions}
              placeholder={'Préference du genre'}
              name="salary" 
              id="g"
              instanceId="g"
            //   onChange={(option) =>setsalary(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 240,
                  margin: 20
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
                  fontWeight: 300,
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

          <div>
            <Select 
              options={religionOptions}
              placeholder={'Preference relligieuse'}
              name="salary" 
              id="r"
              instanceId="r"
            //   onChange={(option) =>setsalary(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 240,
                  margin: 20
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '1em',
                  color: '#3498db',
                  fontWeight: 300,
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

