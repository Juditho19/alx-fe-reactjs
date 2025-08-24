const validate = () => {
  const errs = {};
  if (!username) errs.username = "Username is required";

  if (!email) {
    errs.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errs.email = "Email is invalid";
  }

  if (!password) {
    errs.password = "Password is required";
  } else if (password.length < 6) {
    errs.password = "Password must be at least 6 characters";
  }

  setErrors(errs);
  return Object.keys(errs).length === 0;
};
