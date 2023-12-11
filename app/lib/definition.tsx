export interface PhoneInputFieldProps {
    value: string;
    name: string;
    type: string;
    handleFocus: (fieldName: string) => void | null;
  }
  export interface NumberInputFieldProps {
    name: string;
    type: string;
  }
  
  export interface FormValues   {
      nom: string;
      prenom: string;
      tel: string;
      confirm: string;
      pwd: string;
      confirmPwd: string;
  }

  export interface formLog  {
    identifier: '',
    password: '',
  }