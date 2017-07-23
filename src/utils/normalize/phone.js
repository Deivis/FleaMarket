import onlyNumbers from '../onlyNumbers';

const normalizePhone = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = onlyNumbers(value);

  if (onlyNums.length === 0) {
    return onlyNums;
  }

  if (onlyNums.length <= 2) {
    return `(${onlyNums.slice(0, 2)}`;
  }

  if (onlyNums.length <= 3) {
    return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2)}`;
  }

  if (onlyNums.length <= 6) {
    return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2)}`;
  }
  return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 6)}-${onlyNums.slice(6, 11)}`;
};

export default normalizePhone;
