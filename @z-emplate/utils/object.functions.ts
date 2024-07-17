export const objectLength = <T extends object>(obj: T): number => {
  return Object.keys(obj).length;
};

export const objectIsEmpty = <T extends object>(obj: T): boolean => {
  return objectLength(obj) === 0;
};
