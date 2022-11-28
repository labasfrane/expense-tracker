export function validators(obj) {
  const result = Object.keys(obj).reduce((acc, key) => {
    const validator = {
      value: obj[key],
      message: key,
    };

    return { ...acc, [key]: validator };
  }, {});

  return result;
}
