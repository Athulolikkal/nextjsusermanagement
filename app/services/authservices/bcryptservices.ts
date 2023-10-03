import bcryptjs from "bcryptjs";

export const hashPassword = async (userPassword: string) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(userPassword, salt);
  return hashedPassword;
};

export const isVsalidPassword = async (
  password: string,
  DBpassword: string
) => {
  const validPassword = await bcryptjs.compare(password, DBpassword);
  return validPassword;
};
