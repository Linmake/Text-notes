import axios from "axios";

export const fetchProjects = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/account/login`,
        { withCredentials: true }
      );
      const { account } = data;
      return account
    } catch (error) {
      return console.error("Error fetching projects:", error);
    }
  };