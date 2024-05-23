import { create } from "zustand";
import { AXIOS_AUTH } from "./axios-config";
import { IGlobalSTore, IUser } from "./interface";

// Create a global store using Zustand
export const useGlobalStore = create<IGlobalSTore>((set) => ({
  user: null, // Initialize user as null
  setUser: (user: IUser) => set({ user }), // Set the user value
  checkAuth: async () => {
    try {
      const res = await AXIOS_AUTH.get("/auth"); // Send a GET request to "/auth" endpoint
      set({ user: res.data }); // Set the user value with the response data
    } catch (error) {
      throw new Error(error); // Throw an error if there's any
    }
  },
}));
