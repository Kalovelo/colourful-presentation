interface IContactProps {
  setSnackbar: Function;
}

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

interface IFormFields {
  as: string;
  name: keyof IFormValues;
  type: string;
  label: string;
  placeholder: string;
  validation?: Function;
}

export { IContactProps, IFormFields, IFormValues };
