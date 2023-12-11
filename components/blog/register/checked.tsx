import { Field } from 'formik';

export default function CheckOption() {
  return (
    <div className="w-[218px] flex flex-col sm:flex-row sm:w-1/3  justify-center items-center border-2 border-gray-200 rounded-md py-2 mb-4 bg-white mr-4">

      <div className=""> 
      
        <label className="block  mb-2">Possibilité de dormir ? :</label>

        <div className="flex items-center justify-center space-x-6">
          <label className="flex items-center">
            <Field type="radio" name="dormie" value="OUI" className="form-radio" required/>
            <span className="ml-2">OUI</span>
          </label>

          <label className="flex items-center">
            <Field type="radio" name="dormie" value="NON" className="form-radio" required/>
            <span className="ml-2">NON</span>
          </label>
        </div>
    </div>

      <div className='mx-4 w-0.5 rounded h-full bg-gray-300'></div>

      <div className=""> 

        <label className="block mb-2">Type de contrat :</label>

        <div className="flex items-center space-x-6">
          <label className="flex items-center">
            <Field type="radio" name="contrat" value="CDI" className="form-radio" required/>
            <span className="ml-2">CDI</span>
          </label>

          <label className="flex items-center">
            <Field type="radio" name="contrat" value="CDD" className="form-radio" required/>
            <span className="ml-2">CDD</span>
          </label>
        </div>
      </div>

    </div>
  );
}
