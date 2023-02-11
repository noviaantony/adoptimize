import React from 'react'
import Hero from '../../components/common/landing/Hero';
import Features from '../../components/common/landing/Features';
import '../../index.css'

const Landing = () => {
    const hotjarScript = `
        (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3361643,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;

    return (
        <>
            <div
                style={{display: 'none'}}
                dangerouslySetInnerHTML={{__html: hotjarScript}}
            />
            <div>
                <Hero/>
                <Features/>
            </div>
        </>

        /*

        1. Sign up with us and we will personally onboard you onto adoptsy!
        2. We are flexible - we work with YOUR shelter's work flow
        3. Upload, delete, edit shelter's basic information, pet information on your own without going through our team
        4. Upload adoption forms onto our appplication and you will never have to deal with hardcopies - making things easier for everyone
        5. We automate pre-screening questions that can be automated :) , questions that cannot be automated can also be specified??
        6. We help schedule zoom calls between you and the adopter too!


        */


    )
}

export default Landing



   