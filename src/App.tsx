import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const UpdateBudget = lazy(
  () => import("./pages/budget/update-budget/update-budget")
);
const AddBudget = lazy(() => import("./pages/budget/add-budget/add-budget"));
const Home = lazy(() => import("./pages/home/home"));
const Layout = lazy(() => import("./layout/layout"));
const Register = lazy(() => import("./pages/auth/register"));
const Login = lazy(() => import("./pages/auth/login"));
const Loader = lazy(() => import("./components/loader"));
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="add-budget" element={<AddBudget />} />
            <Route path="update-budget/:id" element={<UpdateBudget />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
