import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { baseURL } from "../costant/constant";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  // const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  const handleLoginUser = async ({ email, password }) => {
    await axios
      .post(
        `${baseURL}v1/users/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        toast.success("Successfully Login");
        setIsLoggedIn(true)
      })
      .catch(function (error) {
        toast.error();
        console.log(error.message);
      });
  };

  

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => handleLoginUser(data);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-pink-400 md:text-2xl dark:text-white">
              LOGIN
            </h1>
            <form
              className="space-y-4 md:space-y-2"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  {...register("password", { required: true })}
                />
              </div>
              <div className=" text-sm">
                <Link
                  className="font-semibold  text-pink-400 hover:underline  dark:text-primary-500"
                  to="/forget-pass"
                >
                  Forget Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-400 hover:bg-primary-700 focus:ring-4 mt-3 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Create an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
