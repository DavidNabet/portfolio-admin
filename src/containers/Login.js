import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserToken }) => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await axios.post(
        `${process.env.REACT_APP_URI_BACK}/user/login`,
        {
          email: register.email,
          password: register.password,
        }
      );
      if (status === 200 && data?.token) {
        setRegister({
          email: "",
          password: "",
        });
        setUserToken(data.token);
        navigate("/publish");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-48">
        <h2 className="text-3xl font-bold mb-6">Connexion</h2>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-sky-300 focus:ring-1 focus:ring-sky-300 focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              value={register.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-sky-300 focus:ring-1 focus:ring-sky-300 focus:shadow-outline"
              name="password"
              type="password"
              placeholder="******************"
              value={register.password}
              onChange={handleInput}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please enter your password.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Log In"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
