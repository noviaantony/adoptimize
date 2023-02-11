import React from 'react'
import Form2 from "../../components/shelter/prescreening/Form2";
import Form from  '../../components/shelter/prescreening/Form'
import Header from '../../components/common/misc/Header'

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import {motion} from "framer-motion";

const Prescreening = () => {
  // confirmation modal functions & useStates
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
          style={{display: 'none'}}
          dangerouslySetInnerHTML={{__html: hotjarScript}}
      />
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <div>
          <Header
            Title="Pre-Screening Questions"
            Description="Add, delete and edit questions for your pre-screening form. Add the question and provide the expected response so that we can auto-evaluate the adopters. If there is no specific expected response, put 'NONE' in the expected response field."
          />
          <Form classname="mt-20" />
          {/* <Form2 classname="mt-20" /> */}
        </div>
      </motion.div>

     
    </>
  );
}

export default Prescreening;
