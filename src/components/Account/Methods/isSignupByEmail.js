import axios from "axios";

/**
 *
 * @param {*} body Verify that the account creation email already exists
 * @returns
 */
export const isSignupByEmail = async (body) => {
  try {
    const res = await axios.post("http://localhost:4000/account/email-exists", body);
    return res.data;
  } catch (err) {
    console.log(err)
    return (false);
  }
};
