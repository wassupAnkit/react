// This file contains the definition of the CheckAuthClass class, which provides a method to check user authentication.

export class CheckAuthClass {
  // The checkAuth method checks if a user is authenticated by retrieving the user object from local storage.
  // If the user object is not found, it returns false. Otherwise, it returns true.
  checkAuth = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    if (!user) {
      return false;
    }
    return true;
  };
}
