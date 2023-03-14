import React, { useRef, useState, useEffect, useContext } from "react";
import { HiMail, HiUserCircle } from "react-icons/hi";
import { ReactComponent as SignUpSvg } from "./ShelterSignUp.svg";
import { Navigate, Link } from "react-router-dom";
// import AuthContext from "../../hooks/AuthContext";
// import axios from "axios";
// import CarbonTrackerService from "../../services/CarbonTrackerService";
import { motion } from "framer-motion";

// const LOGIN_URL = "https://carbonoapp.net/api/v1/carbonO/user/login";
// const USER_ID_URL = "https://carbonoapp.net/api/v1/carbonO/user/getUser";

const ShelterSignUp = () => {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg();
  }, [email, password]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const params = new URLSearchParams();
  //   params.append("username", email);
  //   params.append("password", password);

  //   try {
  //     console.log("Logging in...");
  //     const loginResponse = await axios.post(LOGIN_URL, params);
  //     //store token in local storage
  //     localStorage.setItem("token", loginResponse?.data?.access_token);
  //     localStorage.setItem("authenticated", "true");
  //     const userIdResponse = await axios.get(USER_ID_URL, {
  //       params: { email: email },
  //       headers: { Authorization: `${localStorage.getItem("token")}` },
  //     });
  //     //store user id and first name of the user
  //     localStorage.setItem("userId", userIdResponse.data.id);
  //     localStorage.setItem("firstName", userIdResponse.data.firstName);

  //     setAuth({
  //       authenticated: true,
  //       accessToken: loginResponse?.data?.access_token,
  //       userId: userIdResponse.data.id,
  //       firstName: userIdResponse.data.firstName,
  //     });

  //     setSuccess(true);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("Unable to connect to server");
  //     } else if (err.response.status === 400) {
  //       setErrMsg("Missing Username or password");
  //     } else if (err.response.status === 401) {
  //       // unauthorized
  //       setErrMsg(
  //         "Something went wrong! Ensure you have verified your account and that your password is correct"
  //       );
  //     } else {
  //       setErrMsg("Something went wrong! Try again.");
  //     }
  //     errRef.current.focus();
  //   }
  // };

  return (
    <>
      {success ? (
        <section>
          <br />
          <p></p>
        </section>
      ) : (
        <motion.div
          className="actions flex flex-col items-center min-h-screen py-2 font-default mt-20"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
              <div className="w-3/5 p-5">
                <div className="py-10">
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">
                    Sign up as a Shelter
                  </h2>
                  <div className=" w-10  bg-gray-700 inline-block mb-2"></div>
                  <p className="text-sm font-bold text-green-700 mb-2" >We will email you in a week and get in touch with you!</p>
                  {/* <p className="text-sm font-bold text-red-700 mb-2" >You already have an account with us!</p> */}
                  <p
                    ref={errRef}
                    className={
                      errMsg
                        ? "text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 font-bold"
                        : "offscreen"
                    }
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                </div>
                <form>
                  <div className="flex flex-col items-center">
                    {/* email section */}
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                      <div className="bg-gray-100 w-64 p-2">
                        <HiUserCircle className="text-grey-100 m-2" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        placeholder="enter shelter's name"
                        className="bg-gray-100 text-m flex-1"
                        ref={userRef}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                    {/* email section */}

                    {/* email section */}
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                      <div className="bg-gray-100 w-64 p-2">
                        <HiMail className="text-grey-100 m-2" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        className="bg-gray-100 outline-none text-m flex-1"
                        ref={userRef}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </div>
                    {/* email section */}

                    <button
                      // href=""
                      className="signIn px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-blue-100 hover:bg-gray-700 text-center marker:sm:w-auto font-bold text-gray-700 hover:text-white"
                    >
                      Sign Up
                    </button>
                    <Link
                      to="/ShelterLogIn"
                      className="text-xs font-bold text-gray-700 hover:text-blue-100 transition duration-300 mt-6 hover:underline-offset-4"
                    >
                      Already working with us? Sign in here
                    </Link>
                  </div>
                </form>
              </div>
              <div className="w-2/5 bg-blue-100  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <SignUpSvg width="16rem" />
              </div>
            </div>
          </main>
        </motion.div>
      )}
    </>
  );
};

// rgb(30 58 138)

export default ShelterSignUp;