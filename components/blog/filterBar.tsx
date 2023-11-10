'use client'
import { useState } from "react";
import Select from 'react-select';
import { ageOptions, genderOptions, religionOptions} from '../../utility/utility';
import { VscPersonAdd } from 'react-icons/vsc';
import Filter from "../Navbar/filter";
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
        <div className={clsx(`absolute shadow-lg flex flex-wrap shadow-slate-500/40 bg-[#ffffff] border-r border-slate-300 justify-center h-auto w-full top-20 `,filter,
        pathname === '/blog/annonces' && '',
     !(pathname === '/blog/annonces') && 'hidden'
        )}> 
        <div>
             <Select 
              options={ageOptions}
              placeholder={"Preference d'age"}
              name="gender" 
              id="long-value-select"
              instanceId="long-value-select"
            //   onChange={(option) =>setGender(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 240,
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
              className="m-5"
               />
          </div>

        <div>
            <Select 
              options={genderOptions}
              placeholder={'Préference du genre'}
              name="salary" 
              id="long-value-select"
              instanceId="long-value-select"
            //   onChange={(option) =>setsalary(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 240,
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
              className="m-5"
               />
          </div>

          <div>
            <Select 
              options={religionOptions}
              placeholder={'Preference relligieuse'}
              name="salary" 
              id="long-value-select"
              instanceId="long-value-select"
            //   onChange={(option) =>setsalary(option.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : '#3498db',
                  width: 240,
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
              className="m-5"
               />
          </div>

        </div>
    )
}

