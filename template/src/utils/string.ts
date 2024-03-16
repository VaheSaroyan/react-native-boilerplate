export const firstLetterToUpperCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getFirstLetters = (str?: string, separator = '') => {
  if (!str) return str;

  const words = str.split(' ');
  return words.map(word => word.charAt(0)).join(separator);
};
