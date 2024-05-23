import Stats from "../components/stats/stats";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/loader";
import Login from "../pages/auth/login";
import { useMemo } from "react";
import { CheckAuthClass } from "./helper";

// Defining the Layout component
const Layout = () => {
  // Creating an instance of CheckAuthClass using useMemo hook
  const checkAuthClass = useMemo(() => new CheckAuthClass(), []);
  // Fetching user data using useQuery hook
  const { data: user, isFetching } = useQuery({
    queryKey: ["get", "user"],
    queryFn: checkAuthClass.checkAuth,
  });

  // Rendering the Loader component while fetching data
  // Rendering the main content if user is authenticated
  // Rendering the Login component if user is not authenticated
  return isFetching ? (
    <Loader />
  ) : user ? (
    <main className="@container bg-slate-100">
      <Header />
      <Stats />
      <Outlet />
    </main>
  ) : (
    <Login />
  );
};

export default Layout;
