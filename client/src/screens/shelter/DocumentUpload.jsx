import React, { useState } from 'react';
import Header from '../../components/common/misc/Header'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';


const DocumentUpload = () => {
  const [pdfFile, setPdfFile] = useState(null)
  const [viewPdf, setViewPdf] = useState(null)

  const fileType = ['application/pdf']
  const handleChange = (e) => {
    let selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload = (e) => {
          setPdfFile(e.target.result)
        }
      }
      else {
        setPdfFile(null)
      }
    }
    else {
      console.log("please select")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pdfFile !== null) {
      setViewPdf(pdfFile)
    }
    else {
      setViewPdf(null)
    }
  }

  const newplugin = defaultLayoutPlugin()

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

    <>
    <Header Title = "Adoption Contract" Description = "upload your adoption contract or any other document that adopters would need to sign prior to adoption! Please upload all document as a single pdf. To change the existing document, simply reupload your new document."/>
    

    <div>
      
      <form onSubmit={handleSubmit} className="font-nunito mb-6">
  
        <input class="w-62 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-xl" id="file_input" type="file" onChange={handleChange} />
        <button type="submit" className='bg-gray-700 ml-3 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-md font-nunito text-sm px-10 py-2 text-md mt-6'>Upload PDF</button>
      </form>

    
      {/* <h2>View PDF</h2> */}
      <div className='pdf-container mt-20 mr-12'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          {viewPdf && <>
            <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
          </>}
          {!viewPdf && <>No PDF</>}
        </Worker>
      </div>
    </div>

    <button class="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-sm px-10 py-2 text-xl mt-8"  onClick={handleClickOpen} >
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
            <h3 class="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 font-nunito">Are you sure you would like to upload this document?</h3>
          </div>
        </DialogContent>
        <DialogActions class="p-3 text-center">
          <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={handleClose}>
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleClose}>No, cancel</button>

        </DialogActions>
      </Dialog>

    </>
  )
}

export default DocumentUpload