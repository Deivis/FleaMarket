const onlyNumbers = value =>
  (value && typeof value === 'string' ? value.replace(/[^\d]/g, '') : value);

export default onlyNumbers;

