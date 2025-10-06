import axios from "axios";
import { toast } from "react-toastify";

export const authApi = {
  register: async (name, email, password) => {
    try {
      const user = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      toast.success("User Added Successfully")
      return user;
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error("Failed to register user. Please try again.");
    }
  },
  login: async (email, password) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const user = data[0];
      if (!user) {
        throw new Error("Invalid email or password");
      }
      delete user.password;
      return user;
    } catch (error) {
      toast.error("Wrong Email or Password")
      throw new Error("Failed to log in. Please check your credentials.");
    }
  },
};
