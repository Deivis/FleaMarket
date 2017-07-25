import onlyNumbers from '../onlyNumbers';

const normalizeCardExpiration = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = onlyNumbers(value);

  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`;
};

export default normalizeCardExpiration;
