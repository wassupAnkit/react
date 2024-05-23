import { NavigateFunction } from "react-router-dom";
import {
  ILoginData,
  ILoginDataError,
  IRegisterData,
  IRegisterDataError,
} from "./interface";

export class AuthHelper {
  // validates login data
  checkLoginData = (data: ILoginData) => {
    const error: ILoginDataError = {} as ILoginDataError;
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    return error;
  };
  // validates register data
  checkRegisterData = (data: IRegisterData) => {
    const error: IRegisterDataError = {} as IRegisterDataError;
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    error.name = !data.name ? "Name is required" : "";
    return error;
  };
  // login user
  login = (
    data: ILoginData,
    setError: (data: ILoginDataError) => void,
    clearData: () => void
  ) => {
    // validate data
    const error = this.checkLoginData(data);
    if (error.email || error.password) {
      setError(error);
      return;
    }
    // get users from local storage
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];
    // find user with email
    const user = users.find((user: IRegisterData) => user.email === data.email);
    // if user does not exist set error

    if (!user) {
      setError({ email: "Email does not exist", password: "" });
      return;
    }
    // if password is incorrect set error
    if (user.password !== data.password) {
      setError({ password: "Password is incorrect", email: "" });
      return;
    }
    // set user in local storage if user exists
    localStorage.setItem("user", JSON.stringify(user));
    clearData();
    // redirect to home page
    window.location.replace("/");
  };
  // register user
  register = (
    data: IRegisterData,
    setError: (data: IRegisterDataError) => void,
    clearData: () => void,
    navigate: NavigateFunction
  ) => {
    // validate data
    const error = this.checkRegisterData(data);
    if (error.email || error.password || error.name) {
      setError(error);
      return;
    }
    // get users from local storage
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];
    // find user with email
    const user = users.find((user: IRegisterData) => user.email === data.email);
    // if user exists set error
    if (user) {
      setError({ email: "Email already exists", password: "", name: "" });
      return;
    }
    // set user in local storage if user does not exist -> register user
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    clearData();
    // redirect to login page
    navigate("/login");
  };
}
