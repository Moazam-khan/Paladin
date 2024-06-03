export const truncateString = (str: string, length: number) => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};

export const clean = (obj: any) => {
  for (let propName in obj) {
    if (
      obj[propName] === "" ||
      obj[propName] === null ||
      obj[propName] === undefined
    ) {
      delete obj[propName];
    }
  }
  return obj;
};
