import React from 'react'
import Header from '../../components/common/misc/Header'
import EditableTable from '../../components/shelter/aboutus/EditableTable'
import EditableTable2 from '../../components/shelter/aboutus/EditableTable2'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const AboutUs = () => {

  // confirmation modal functions & useStates
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  //

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mb-20">
      <Header Title="About Us" Description = "edit your shelter's information and decription here! if you would like to include any other information kindly contact us at adoptsy@gmail.com"/>
      {/* <EditableTable/> */}
      <EditableTable2/>
      <button class="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-sm px-10 py-2" onClick={handleClickOpen}>
        Save Information
      </button>

      {/* confirmation modal */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div class="p-3 text-center">
            <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 class="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 font-nunito">Are you sure you want to delete this product?</h3>
          </div>
        </DialogContent>
        <DialogActions class="p-3 text-center">
          <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={handleClose}>
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleClose}>No, cancel</button>

        </DialogActions>
      </Dialog>


    </div>
  )
}

export default AboutUs
