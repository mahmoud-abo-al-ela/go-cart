import { useState } from "react";
import Store from "../../redux/store.js";
import { LoadUser } from "../../redux/actions/user.js";
import styles from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import FormRow from "../FormRow";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      toast.success("Login succes");
      navigate("/");
      window.location.reload();
      Store.dispatch(LoadUser());
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow transition-shadow hover:shadow-md sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={submitHandler}>
            <FormRow
              text="Email"
              name="email"
              type="email"
              value={email}
              inputHandler={(e) => setEmail(e.target.value)}
            />
            <FormRow
              text="Password"
              name="password"
              type="password"
              value={password}
              inputHandler={(e) => setPassword(e.target.value)}
            />

            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} justify-center w-full`}>
              <h4>Not have an account?</h4>
              <Link
                to="/sign-up"
                className="ml-1 text-blue-500 hover:text-blue-400"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
