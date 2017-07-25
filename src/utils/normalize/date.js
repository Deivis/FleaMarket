import onlyNumbers from '../onlyNumbers';

const normalizeDate = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = onlyNumbers(value);

  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  }

  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`;
};

export default normalizeDate;
