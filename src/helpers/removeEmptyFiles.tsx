export const removeEmptyFields = (obj: Record<string, any>): Record<string, any> => {
    const newObj: Record<string, any> = {};
  
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (
        value !== null &&
        value !== undefined &&
        value !== '' &&
        (typeof value !== 'object' || Object.keys(value).length > 0)
      ) {
        newObj[key] = value;
      }
    });
  
    return newObj;
  };
  