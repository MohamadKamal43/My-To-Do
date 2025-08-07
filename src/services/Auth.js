import axios from "axios";

// Use Vercel API URL in production, localhost in development
const API_BASE_URL = import.meta.env.PROD
  ? "https://my-to-do-wheat.vercel.app/api"
  : "http://localhost:3000";

export const authApi = {
  register: async (name, email, password) => {
    try {
      const user = await axios.post(`${API_BASE_URL}/users`, {
        name,
        email,
        password,
      });
      return user;
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error("Failed to register user. Please try again.");
    }
  },
  login: async (email, password) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/users?email=${email}&password=${password}`
      );
      const user = data[0];
      if (!user) {
        throw new Error("Invalid email or password");
      }
      delete user.password;
      return user;
    } catch (error) {
      console.error("Error logging in user:", error);
      throw new Error("Failed to log in. Please check your credentials.");
    }
  },
};
