import PropTypes from "prop-types";
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = value !== undefined && value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.fixlength) {
    isValid =
      value !== undefined &&
      value.trim().length === rules.fixlength &&
      value.trim().length !== 0 &&
      rules.type === PropTypes.number &&
      isValid;
  }
  if (rules.oprator) {
    isValid = value !== undefined && value.trim().length !== 0 && isValid;
  }
  return isValid;
};
