'use client'
import { useState } from "react";
import Select from 'react-select';
import { ageOptions, genderOptions, religionOptions} from '../../utility/utility';
import { VscPersonAdd } from 'react-icons/vsc';




export default function FilterBar(){

      const [age, setAge] = useState('all');
      const [gender, setGender] = useState('all');
      const [salary, setsalary] = useState('all');

    return(
        <div className="shadow-lg hidden sm:flex shadow-slate-500/40 bg-[#ffffff] border-r border-slate-300 items-center justify-start flex-col h-[610px] sticky left-0 top-0 w-auto p-10">     
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

// import Style from '../../styles/formh.module.css';
// import axios from 'axios';
// import Select from 'react-select';
// import { useCart } from "react-use-cart";
// export default function Formh({ updateData, setShow }) {
//   const {
//     totalUniqueItems
//   } = useCart();
//   useEffect(() => {
//     axios.get('/api/persons/data',{ params: {age: age, gender: gender, salary: salary} })
//         .then(res => updateData(res.data))
//         .catch(err => console.log(err));
// }, [age, gender, salary]);
//   return (
//         <div className={Style.navbar}>
//          
//           <div className={Style.nav_box}>
//             <span className={Style.my_choix} onClick={() => setShow(false)}>Mes Choix</span> <span className={Style.line}>&#124;</span>
//             <div className={Style.cart}>
//               <span onClick={() => setShow(true)}>
//               <VscPersonAdd />
//               </span>
//               <span className='my_choix'>{totalUniqueItems}</span>
//             </div>
//           </div>

//           </div>
//           )
// }


