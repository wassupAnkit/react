import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthHelper } from "./helper";
import { useAuthStore } from "./store";
import InputField from "../../components/input-fields/input-field";

const Register = () => {
  const navigate = useNavigate();

  // classes
  const authClass = useMemo(() => new AuthHelper(), []);

  // stores
  const {
    registerData: data,
    setRegisterData: setData,
    clearRegisterData: clearData,
    registerDataError: error,
    setRegisterDataError: setError,
  } = useAuthStore();

  // handlers
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // handlers for form submit event
  const handleOnSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    authClass.register(data, setError, clearData, navigate);
  };

  return (
    <>
      <main className="flex items-center justify-center w-full h-screen">
        {/* Left section */}
        <section className="min-[900px]:flex-1 hidden min-[900px]:block min-[900px]:border-r h-screen "></section>

        {/* Right section */}
        <section className="relative flex-1 h-screen overflow-hidden isolate">
          <form className="flex items-center justify-center w-full h-screen backdrop-blur-md ">
            <div className="flex flex-col items-center px-4 py-4 w-[20em] min-[500px]:w-[25em] min-[650px]:w-[27em]">
              <h1 className="mb-8 text-2xl font-bold text-gray-600">
                Register
              </h1>

              <div className="flex flex-col w-full gap-y-4">
                {/* Input field for name */}
                <InputField
                  label="name"
                  icon="pixelarticons:user"
                  type="text"
                  name="name"
                  id="name"
                  value={data.name}
                  onChange={handleOnChange}
                  placeholder="Type your name"
                />
                {error.name && (
                  <p className="text-rose-500 text-[.8rem] -mt-3">
                    {error.name}
                  </p>
                )}

                {/* Input field for email */}
                <InputField
                  label="Email"
                  icon="memory:email"
                  type="email"
                  name="email"
                  id="username"
                  value={data.email}
                  onChange={handleOnChange}
                  placeholder="Type your email"
                />
                {error.email && (
                  <p className="text-rose-500 text-[.8rem] -mt-3">
                    {error.email}
                  </p>
                )}

                {/* Input field for password */}
                <InputField
                  label="Password"
                  icon="pixelarticons:lock"
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={handleOnChange}
                  placeholder="Type your password"
                />
                {error.password && (
                  <p className="text-rose-500 text-[.8rem] -mt-3">
                    {error.password}
                  </p>
                )}
              </div>

              {/* Register button */}
              <button
                type="submit"
                className="w-full px-4 py-2 mt-8 text-lg font-semibold text-white rounded bg-[#2e2e2e] hover:shadow-lg"
                onClick={handleOnSubmit}
              >
                Register
              </button>

              {/* Login link */}
              <div className="flex justify-start w-full mt-3 text-[.8rem]">
                <p>
                  Already have an account? <Link to={"/login"}>Login here</Link>
                </p>
              </div>
            </div>
          </form>

          {/* Background circles */}
          <div className="w-[5em] h-[5em] bg-sky-500/70 rounded-full absolute z-[-1] top-20 left-10"></div>
          <div className="w-[20em] h-[20em] bg-rose-500/70 rounded-full absolute z-[-1] bottom-[-7em] right-[-7em]"></div>
          <div className="w-[10em] h-[10em] bg-green-500/70 rounded-full absolute z-[-1] top-[-5em] right-[-5em]"></div>
          <div className="w-[15em] h-[15em] bg-yellow-500/70 rounded-full absolute z-[-1] bottom-[-10em] left-[-10em]"></div>
          <div className="w-[8em] h-[8em] bg-purple-500/70 rounded-full absolute z-[-1] bottom-[-3em] right-[-3em]"></div>
        </section>
      </main>
    </>
  );
};

export default Register;
