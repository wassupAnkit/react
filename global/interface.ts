// Represents the global store interface.
export interface IGlobalSTore {
  // Represents the user object.
  user: IUser | null;
  /**
   * Sets the user object.
   * @param user - The user object to be set.
   */
  setUser: (user: IUser) => void;
  /**
   * Checks the authentication.
   * @returns A promise that resolves when the authentication check is complete.
   */
  checkAuth: () => Promise<void>;
}
// Represents the user interface.
export interface IUser {
  // The name of the user.
  name: string;
  // The email of the user.
  email: string;
  //  The password of the user.
  password: string;
}
