import { useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import FormRow from "../FormRow";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleImageInput = (e) => {
    const img = e.target.files[0];
    setAvatar(img);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", avatar);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/sign-up",
        formData,
        config
      );
      toast.success(response.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setAvatar(null);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create new account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow transition-shadow hover:shadow-md sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormRow
              text="Name"
              name="name"
              type="text"
              value={name}
              inputHandler={(e) => setName(e.target.value)}
            />
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
            <div className={`${styles.noramlFlex}`}>
              <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <RxAvatar className="h-8 w-8" />
                )}
              </span>
              <label
                htmlFor="image"
                className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 cursor-pointer"
              >
                <span>Upload image</span>
                <input
                  type="file"
                  id="image"
                  accept=".jpg,.jpeg,.png"
                  className="sr-only"
                  onChange={handleImageInput}
                  onInput={(e) => {
                    e.target.setCustomValidity("");
                  }}
                  onInvalid={(e) => {
                    e.target.setCustomValidity(
                      "Please select an image file (jpg, jpeg, or png)."
                    );
                  }}
                  required
                />
              </label>
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
              <h4>Alredy have an account?</h4>
              <Link
                to="/login"
                className="ml-1 text-blue-500 hover:text-blue-400"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
