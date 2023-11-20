import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  registerUser,
  getMe,
} from "../../redux/slice/login/loginSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState("login");
  const [inputs, setInputs] = useState([]);
  const { registerStatus, loggedInUserStatus, me, getMeStatus } = useSelector(
    (state) => state.loginSlice
  );
  useEffect(() => {
    if (getMeStatus === "success") {
      console.log("me", me);
    }
  }, [getMeStatus, me]);

  useEffect(() => {
    if (registerStatus === "pending") {
      message.loading("Loading...");
    } else if (registerStatus === "rejected") {
      message.error("regestration failed...");
    } else if (registerStatus === "success") {
      message.success("user registerd successfully");
      setActiveState("login");
      setInputs([]);
    }
  }, [dispatch, registerStatus]);

  useEffect(() => {
    if (loggedInUserStatus === "pending") {
      message.loading("Loading...");
    } else if (loggedInUserStatus === "success") {
      message.success("successfully logged in");
      navigate("/main");
    } else if (loggedInUserStatus === "rejected") {
      message.error("login failed...");
    }
  }, [loggedInUserStatus, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = inputs;
    if (activeState === "login") {
      dispatch(loginUser({ email, password }));
    } else if (activeState === "register") {
      dispatch(registerUser({ email, password, name }));
    }
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="h-screen 	bg-gray-600 flex items-center justify-center">
        {activeState === "login" ? (
          <div className="w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInputChange}
                  value={inputs.password || ""}
                  required
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <span className="px-3 text-white">or</span>
              <button
                type="button"
                onClick={() => {
                  setActiveState("register");
                  setInputs([]);
                }}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Register new account
              </button>
            </form>
          </div>
        ) : (
          <>
            {activeState === "register" ? (
              <div className="w-1/2">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      User name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleInputChange}
                      value={inputs.name || ""}
                      required
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      onChange={handleInputChange}
                      value={inputs.email || ""}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      onChange={handleInputChange}
                      value={inputs.password || ""}
                      required
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register
                  </button>{" "}
                  or
                  <button
                    type="button"
                    onClick={() => {
                      setActiveState("login");
                      setInputs([]);
                    }}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Login;
