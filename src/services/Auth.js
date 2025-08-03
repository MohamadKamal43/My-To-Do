import axios from "axios";

export const authApi = {
  register: async (name, email, password) => {
    const user = await axios.post("http://localhost:3000/users", {
      name,
      email,
      password,
    });
    return user;
  },
  login: async (email, password) => {
    const { data } = await axios.get(
      `http://localhost:3000/users?email=${email}&password=${password}`
    );
    const user = data[0];
    if (!user) {
      throw new Error("Invalid email or password");
    }
    delete user.password;
    return user;
  },
};
