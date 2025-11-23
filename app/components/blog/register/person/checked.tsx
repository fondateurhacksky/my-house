import { Field } from 'formik';

export default function CheckOption() {
  return (
    <div className="w-[220px] flex flex-col sm:flex-row sm:max-lg:w-48x lg:w-30x justify-center items-center border-2 border-gray-200 rounded-md py-2 mb-4 bg-white sm:mr-4">

        <label className='mr-2'>Possibilité de dormir ? :</label>

        <div className="flex items-center justify-center space-x-6 ">
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
  );
}
