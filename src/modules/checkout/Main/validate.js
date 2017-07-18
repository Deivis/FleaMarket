
// TODO ADD FORM VALIDATIONS HERE !!!

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'E-mail is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid e-mail';
  }

  if (!values.phone) {
    errors.phone = 'Phone is required';
  }

  if (!values.code) {
    errors.code = 'Invalid identification';
  }
};

export default validate;
