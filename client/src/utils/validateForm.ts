const validateForm = (errors: any, data: any, values: any, key: string) => {
  if (!values[key]) {
    errors[key] = data[key][0][0];
  } else if (data[key][1]) {
    errors[key] = data[key][0][1];
  }
};

export default validateForm;