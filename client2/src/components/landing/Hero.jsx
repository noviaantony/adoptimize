import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ReactComponent as HeroSvg } from "./HeroSvg.svg";
import { motion } from "framer-motion";

const Hero = () => {
  // destructure hero data
  // const { title, subtitle, btnText, compText, image } = hero;
  return (
    <section className="min-h-[900px] py-12 font-nunito text-[#354458] ">
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          {/* text */}
          <div className="flex-2">
            <motion.div
              className="md:-mt-20 mx-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="ext-6xl lg:text-8xl font-extrabold mb-6 font-bold mb-2 lg:mb-5">
                Making adoption easier for everyone
              </h1>
              <p
                className=" text-2xl text-light font-normal mb-6 mb-5 lg:mb-10"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                streamlining pet adoption for shelters, one pet at a time
              </p>
              {/* btn & comp text */}
              <div
                className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
                data-aos="fade-down"
                data-aos-delay="700"
              >
                <Link
                  className="bg-[#354458] focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#354458] text-center rounded-md block sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito"
                  to="/SignUp"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
          {/* image */}

          <motion.div
            className=" lg:w-1/2 mt-16 lg:mt-0 lg:ml-16 actions"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <HeroSvg className="w-144 ml-auto" width="40rem" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
