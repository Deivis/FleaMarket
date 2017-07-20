
// TODO ADD FORM VALIDATIONS HERE !!!

const validate = (values) => {
  const errors = {};
  const {
    email,
    phone,
    personID,
    birthday,
    address,
    zipcode,
  } = values;

  if (!email) {
    errors.email = 'E-mail is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid e-mail';
  }

  if (!phone) {
    errors.phone = 'Phone is required';
  }

  if (!personID) {
    errors.personID = 'Identification is required';
  }

  if (!birthday) {
    errors.birthday = 'Birthday is required';
  }

  if (!address) {
    errors.address = 'Address is required';
  }

  if (!zipcode) {
    errors.zipcode = 'Zip code is required';
  } else if (!/^\d{5}-\d{3}$/.test(zipcode)) {
    errors.zipcode = 'Invalid zip code';
  }

  return errors;
};

export default validate;
