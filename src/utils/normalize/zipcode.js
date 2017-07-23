import onlyNumbers from '../onlyNumbers';

const normalizeZipCode = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = onlyNumbers(value);

  if (onlyNums.length <= 5) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 9)}`;
};

export default normalizeZipCode;
