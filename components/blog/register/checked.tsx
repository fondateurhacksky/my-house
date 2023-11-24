import { Field, Form, ErrorMessage } from 'formik';

export default function CheckOption(){
    return(
        <div className="flex w-1/3 justify-center justify-around items-center">
    <div className="mb-4">
        <label className="block">Posibilité de dormie ? :</label>

        <div className="flex items-center space-x-4" role="group">
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

    <div className="mb-4">
        <label className="block">Type de contrat :</label>

        <div className="flex items-center space-x-4" role="group">
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

    )
}