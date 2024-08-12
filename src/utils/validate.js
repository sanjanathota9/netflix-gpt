export const checkValidData = (email, password, fullname) => {
  const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );
  const fullnamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullname);
  if (!emailPattern) return "Email ID is not valid";
  if (!passwordPattern) return "Password is not valid";
  if (!fullnamePattern) return "FullName is not valid";
  return null;
};
