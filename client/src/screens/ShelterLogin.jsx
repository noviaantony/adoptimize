import React, { useRef, useState, useEffect, useContext } from "react";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { ReactComponent as SignInSvg } from "./ShelterLogIn.svg";
import { Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";

const ShelterLogin = () => {
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

  return (
    <>
      {success ? (
        <section>
          <br />
          <p>
            <Navigate to="/Dashboard" />
          </p>
        </section>
      ) : (
        <>
          <Navbar />
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
                      Sign in as a shelter
                    </h2>
                    <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
                    {/*<p*/}
                    {/*  ref={errRef}*/}
                    {/*  className="text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded font-bold"*/}

                    {/*  aria-live="assertive"*/}
                    {/*>*/}
                    {/*  this email does not exist! */}
                    {/*</p>*/}
                  </div>
                  <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    <div className="flex flex-col items-center">
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
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                      {/* email section */}

                      {/* password section */}
                      <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                        <div className="bg-gray-100 w-64 p-2">
                          <HiLockClosed className="text-grey-100 m-2" />
                        </div>
                        <input
                          type="password"
                          name="password"
                          placeholder="enter your password"
                          className="bg-gray-100 outline-none text-m flex-1"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          required
                        />
                      </div>
                      {/* password section */}

                      <div className="flex justify-between w-64 mb-5">
                        <Link
                          to="/ForgetPassword"
                          className="text-xs font-bold text-gray-700 hover:text-blue-100 transition duration-300"
                        >
                          Forgot Password
                        </Link>
                      </div>

                      <button
                        // href=""
                        className="signIn px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#F7AF7A] hover:bg-[#FDEDE1] text-center marker:sm:w-auto font-bold text-gray-700 hover:text-[#F7AF7A] "
                      >
                        Sign In
                      </button>
                      <Link
                        to="/ShelterSignUp"
                        className="text-xs font-bold text-gray-700 hover:text-[#F7AF7A] transition duration-300 mt-6 hover:underline-offset-4"
                      >
                        Don't have an account? Sign up here
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="w-2/5 bg-[#FDEDE1]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                  <SignInSvg width="16rem" />
                </div>
              </div>
            </main>
          </motion.div>
        </>
      )}
    </>
  );
};


export default ShelterLogin;

