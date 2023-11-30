import { useField } from "formik";
import Input from 'react-phone-number-input/input';
import { NumberInputFieldProps } from "../../../../app/lib/definition";

const NumberInput: React.FC<NumberInputFieldProps> = ({ value, name, type }) => {
  const [field, meta, helpers] = useField(name);

  const handlePhoneChange = (newPhoneValue: string | undefined) => {
    helpers.setValue(newPhoneValue || "");
  };

  return (
    <Input
      {...field}
      type={type}
      country="CI"
      className="pl-2 w-full sm:w-11/12 bg-white border-2 border-slate-150 rounded focus:outline-none focus:border-blue-500 py-2 px-2 valid:border-green-500"
      value={value}
      onChange={handlePhoneChange}
      required
    />
  );
};

export default NumberInput;
