import { Field } from 'formik';

export default function CheckOption() {
    return (
        <div className="flex w-1/3 justify-center items-center border-2 border-gray-300 p-4 rounded-md m-4 bg-white">
            <div className="pr-6"> {/* Ajout de la classe "pr-6" pour l'espacement à droite */}
                <label className="block font-semibold mb-2">Possibilité de dormir ? :</label>

                <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                        <Field type="radio" name="dormir" value="OUI" className="form-radio" />
                        <span className="ml-2">OUI</span>
                    </label>

                    <label className="flex items-center">
                        <Field type="radio" name="dormir" value="NON" className="form-radio" />
                        <span className="ml-2">NON</span>
                    </label>
                </div>
            </div>

            <div className=" pl-6 border-l-2 border-gray-300"> {/* Ajout de la classe "pl-6" pour l'espacement à gauche et de la bordure gauche */}
                <label className="block font-semibold mb-2">Type de contrat :</label>

                <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                        <Field type="radio" name="typeContrat" value="CDI" className="form-radio" />
                        <span className="ml-2">CDI</span>
                    </label>

                    <label className="flex items-center">
                        <Field type="radio" name="typeContrat" value="CDD" className="form-radio" />
                        <span className="ml-2">CDD</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
