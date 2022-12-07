import { ERROR_MESSAGES } from "constants/errors.constants";

export function validators(obj) {
  const result = Object.keys(obj).reduce((acc, key) => {
    const validator = {
      value: obj[key],
      message: ERROR_MESSAGES[key] || key,
    };

    return { ...acc, [key]: validator };
  }, {});

  return result;
}
