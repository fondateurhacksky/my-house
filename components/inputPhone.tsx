import { useField } from "formik";
import Input from 'react-phone-number-input/input';
import { PhoneInputFieldProps } from "../utility/utility";

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({ value, name, type, handleFocus }) => {
  const [field, meta, helpers] = useField(name);

  const handlePhoneChange = (newPhoneValue: string | undefined) => {
    helpers.setValue(newPhoneValue || "");
  };

  return (
    <Input
      {...field}
      type={type}
      country="CI"
      international
      withCountryCallingCode
      className="bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-12 pl-1"
      value={value}
      onChange={handlePhoneChange}
      onFocus={() => handleFocus(name)}
    />
  );
};

export default PhoneInputField;
