import User from "../models/user.js";

export const isAdminType = async (userId) => {
  try {
    const user = await User.findById(userId);
    const userType = user.role;
    return userType === "admin";
  } catch (error) {
    console.log(error);
    return false;
  }
};
