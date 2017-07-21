
const validate = (values) => {
  const errors = {};
  const {
    type,
    card,
  } = values;

  if (!type === 'card' && !card) {
    errors.email = 'Card is required';
  }

  return errors;
};

export default validate;
