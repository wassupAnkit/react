// Interface for managing login data
export interface IUseAuthStore {
  loginData: ILoginData; // Holds login data
  setLoginData: (data: ILoginData) => void; // Sets login data
  clearLoginData: () => void; // Clears login data
  loginDataError: ILoginDataError; // Holds login data errors
  setLoginDataError: (data: ILoginDataError) => void; // Sets login data errors
  registerData: IRegisterData; // Holds register data
  setRegisterData: (data: IRegisterData) => void; // Sets register data
  clearRegisterData: () => void; // Clears register data
  registerDataError: IRegisterDataError; // Holds register data errors
  setRegisterDataError: (data: IRegisterDataError) => void; // Sets register data errors
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginDataError {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
}

export interface IRegisterDataError {
  email: string;
  password: string;
  name: string;
}
