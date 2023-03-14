import React from "react";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import KeyFeatures from "../components/landing/KeyFeatures";
import Footer from "../components/navigation/Footer";

// import "../../index.css";

const Landing = () => {
  // const hotjarScript = `
  //       (function(h,o,t,j,a,r){
  //       h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //       h._hjSettings={hjid:3361643,hjsv:6};
  //       a=o.getElementsByTagName('head')[0];
  //       r=o.createElement('script');r.async=1;
  //       r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //       a.appendChild(r);
  //     })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  //   `;

  return (
    <>
      {/* <div
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: hotjarScript }}
      /> */}
      <div>
        <Navbar/>
        <Hero />
        <KeyFeatures/>
        <Footer/>
      </div>
    </>
  );
};

export default Landing;
