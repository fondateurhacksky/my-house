import { useField } from "formik";
import Input, { getCountries } from 'react-phone-number-input/input';
import { PhoneInputFieldProps } from "../app/lib/definition";

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({ value, name, type, handleFocus }) => {
  const [field, meta, helpers] = useField(name);

  const handlePhoneChange = (newPhoneValue: string | undefined) => {
    helpers.setValue(newPhoneValue || "");
  };

  return (
    <Input
      {...field}
      type={type}
      placeholder="Enter phone number"
      country="CI"
      className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-10"
      value={value}
      onChange={handlePhoneChange}
      onFocus={() => handleFocus(name)}
    />
  );
};

export default PhoneInputField;
