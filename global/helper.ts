import { IUserData } from "./../src/pages/budget/interface";

/**
 * GlobalHelper class provides utility methods for accessing user data.
 */
export class GlobalHelper {
  /**
   * Retrieves the user data from local storage.
   * @returns The user data or null if not found.
   */
  getUser = () => {
    const user: IUserData = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
    return user;
  };
}
