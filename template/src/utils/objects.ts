export function keys<T>(obj: T): (keyof T)[] {
  // @ts-ignore
  return Object.keys(obj);
}

export const trimObjectValues = <T extends object>(obj: T): T => {
  keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') {
      // @ts-ignore
      obj[key] = obj[key].trim();
    }
  });
  return obj;
};
