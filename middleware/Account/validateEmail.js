const validateEmail = (email) => {
  if (email.length <= 3) {
    return false;
  }
  if (!(email.includes("@") || email.includes("."))) {
    return false;
  }

  if (!(email.lenght > 3)) {
    return false;
  }

  return true
};

export default validateEmail