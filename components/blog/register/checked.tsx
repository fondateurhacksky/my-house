import { Field } from 'formik';

export default function CheckOption() {
  return (
    <div className="w-[218px] flex flex-col sm:flex-row sm:w-1/3 justify-center items-center border-2 border-gray-300 p-4 rounded-md mb-4 bg-white">
      <div className="sm:pr-6 sm:w-1/2"> {/* Utilisation de classes pour définir la largeur des éléments sur les grands écrans */}
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

      <div className="sm:pl-6 my-4 sm:border-l-2 border-gray-300 sm:w-1/2"> 

        <label className="block  mb-2">Type de contrat :</label>

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
