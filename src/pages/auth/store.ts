// Importing the 'create' function from the 'zustand' library
import { create } from "zustand";
import { IUseAuthStore } from "./interface";

// Creating and exporting the 'useAuthStore' store using the 'create' function
export const useAuthStore = create<IUseAuthStore>((set) => ({
  // Initial state for login data
  loginData: {
    email: "",
    password: "",
  },
  // Function to update login data
  setLoginData: (data) =>
    set((state) => ({
      loginData: {
        ...state.loginData,
        ...data,
      },
    })),
  // Reset login data
  clearLoginData: () =>
    set((state) => ({
      loginData: {
        ...state.loginData,
        email: "",
        password: "",
      },
    })),
  // Initial state for login data errors
  loginDataError: {
    email: "",
    password: "",
  },
  // Function to update login data errors
  setLoginDataError: (data) =>
    set((state) => ({
      loginDataError: {
        ...state.loginDataError,
        ...data,
      },
    })),
  // Initial state for register data
  registerData: {
    email: "",
    password: "",
    name: "",
  },
  // Function to update register data
  setRegisterData: (data) =>
    set((state) => ({
      registerData: {
        ...state.registerData,
        ...data,
      },
    })),
  // Reset register data
  clearRegisterData: () =>
    set((state) => ({
      registerData: {
        ...state.registerData,
        email: "",
        password: "",
        name: "",
      },
    })),
  // Initial state for register data errors
  registerDataError: {
    email: "",
    password: "",
    name: "",
  },
  // Function to update register data errors
  setRegisterDataError: (data) =>
    set((state) => ({
      registerDataError: {
        ...state.registerDataError,
        ...data,
      },
    })),
}));
