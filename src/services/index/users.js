import axios from "axios";

// Signup

export const signup = async ({ name, email, password }) => {
   try {
      const { data } = await axios.post("/api/users/register", {
         name,
         email,
         password,
      });
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

// Login
export const login = async ({ email, password }) => {
   try {
      const { data } = await axios.post("/api/users/login", {
         email,
         password,
      });
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

// Get User Profile
export const getUserProfile = async ({ token }) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };
      const { data } = await axios.get("/api/users/profile", config);
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

// Update User Profile

export const updateProfile = async ({ token, userData }) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };
      const { data } = await axios.put("/api/users/update", userData, config);
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};

export const updateProfilePicture = async ({ token, formData }) => {
   try {
      const config = {
         headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         },
      };
      const { data } = await axios.put(
         "/api/users/updatepicture",
         formData,
         config
      );
      return data;
   } catch (error) {
      if (error.response && error.response.data.message)
         throw new Error(error.response.data.message);
      throw new Error(error.message);
   }
};
