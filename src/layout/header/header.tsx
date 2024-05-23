import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalHelper } from "../../../global/helper";

const Header = () => {
  // Initialize navigate function from react-router-dom
  const navigate = useNavigate();

  // Create an instance of GlobalHelper class using useMemo hook
  const globalClass = useMemo(() => new GlobalHelper(), []);

  // Get user information from GlobalHelper instance
  const user = globalClass.getUser();

  // Handle logout button click event
  const handleLogoutClick = () => {
    // Remove user data from local storage
    localStorage.removeItem("user");

    // Navigate to login page
    navigate("/login");
  };

  return (
    <>
      {/* Header */}
      <header className="py-2 px-2 text-[#2e2e2e]/80 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 @[1300px]:py-3 border-b sticky top-0 z-10 bg-white">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <span className="cursor-pointer select-none" title="BudgTrack">
            <Icon icon="mingcute:pig-money-fill" width={35} />
          </span>
          {/* Navigation */}
          <ul className="flex gap-x-3 font-semibold uppercase text-[.95rem]">
            <li>
              <Link to="/" className="outline-none">
                Dashboard
              </Link>
            </li>
            <li>Budget</li>
          </ul>
          {/* Account */}
          <div className="border rounded-full border-[#2e2e2e] p-[3px] group relative">
            <span title="Account" className="cursor-pointer select-none">
              <Icon icon="memory:user" width={20} />
            </span>
            {/* Account dropdown */}
            <div className="absolute top-5 right-0 group-hover:block hover:block w-[7em] border-r border-l border-b rounded-sm hidden">
              <ul className="grid gap-1 px-3 pb-3 mt-3 bg-white">
                <li>
                  <Link to="/">Profile</Link>
                </li>
                {user ? (
                  <li
                    className="cursor-pointer"
                    onClick={() => handleLogoutClick()}
                  >
                    Logout
                  </li>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <p className="cursor-pointer">Settings</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
