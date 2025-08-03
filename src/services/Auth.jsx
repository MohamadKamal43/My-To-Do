import axios from "axios";
import { defaults } from "json-server";
export const authApi = {
  register: async (name, email, password) => {
    try {
      const { user } = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      return user.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      const { users } = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const user = users[0];
      if (!user) {
        throw new Error("Invalid email or password");
      }
      return user;
    } catch (error) {
      console.error("Login error:", error);
    }
  },
};
