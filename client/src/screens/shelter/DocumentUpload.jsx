// import React, {useState} from 'react'

// import React,{useState} from 'react'
// import Header from '../components/misc/Header'

// // Import Worker
// import { Worker } from '@react-pdf-viewer/core';
// // Import the main Viewer component
// import { Viewer } from '@react-pdf-viewer/core';
// // Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// // default layout plugin
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// // Import styles of default layout plugin
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import { Document, Page } from 'react-pdf';

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';



// const DocumentUpload = () => {

//    // creating new plugin instance
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   // pdf file onChange state
//   const [pdfFile, setPdfFile]=useState(null);

//   // pdf file error state
//   const [pdfError, setPdfError]=useState('');


//   // handle file onChange event
//   const allowedFiles = ['application/pdf'];
//   const handleFile = (e) =>{
//     let selectedFile = e.target.files[0];
//     // console.log(selectedFile.type);
//     if(selectedFile){
//       if(selectedFile&&allowedFiles.includes(selectedFile.type)){
//         let reader = new FileReader();
//         reader.readAsDataURL(selectedFile);
//         reader.onloadend=(e)=>{
//           setPdfError('');
//           setPdfFile(e.target.result);
//         }
//       }
//       else{
//         setPdfError('Not a valid pdf: Please select only PDF');
//         setPdfFile('');
//       }
//     }
//     else{
//       console.log('please select a PDF');
//     }
//   }

//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   // confirmation modal functions & useStates
//   const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

//   //

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//   return (
//     <>
//       <Header Title = "Adoption Contract" Description = "edit and upload your adoption contract that adopters would need to sign prior to adoption!"/>
//       <div class="flex items-center justify-center w-4/6 ml-80 mt-20 mb-20
//       ">
//     <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//         <div class="flex flex-col items-center justify-center pt-5 pb-6">
//             <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
//             <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
//             <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//         </div>
//         <input id="dropzone-file" type="file" class="hidden" />

//     </label>
//     </div> 

//     {/* <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//      */}

//      <button class="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-xl px-10 py-2" onClick={handleClickOpen}>
//         Save Document
//       </button>

//      {/* confirmation modal */}
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogContent>
//           <div class="p-3 text-center">
//             <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//             <h3 class="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 font-nunito">Are you sure you want to delete this product?</h3>
//           </div>
//         </DialogContent>
//         <DialogActions class="p-3 text-center">
//           <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={handleClose}>
//                     Yes, I'm sure
//                 </button>
//                 <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleClose}>No, cancel</button>

//         </DialogActions>
//       </Dialog>








//     </>
//   )
// }

// export default DocumentUpload



// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
// import '../App.css';

// const DocumentUpload = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1)
//   }

//   function changePage(offset) {
//     setPageNumber(prevPageNumber => prevPageNumber + offset);
//   }

//   function changePageBack() {
//     changePage(-1)
//   }

//   function changePageNext() {
//     changePage(+1)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Document file="/assignment1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//           <Page height="600" pageNumber={pageNumber} />
//         </Document>
//         <p> Page {pageNumber} of {numPages} </p>
//         {
//           pageNumber > 1 && 
//           <button onClick={changePageBack}>Previous Page</button>}
//         {
//           pageNumber < numPages &&
//           <button onClick={changePageNext}>Next Page</button>
//         }
//       </header>
//     </div>
//   )
// }

// export default DocumentUpload

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
    <Header Title = "Adoption Contract" Description = "edit and upload your adoption contract that adopters would need to sign prior to adoption!"/>
    

    <div>
      
      <form onSubmit={handleSubmit} className="font-nunito mb-6 ">
  
        {/* <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white mr-3 text-3xl" for="file_input">Upload file</label> */}
<input class="w-62 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-3xl" id="file_input" type="file" onChange={handleChange} />
        {/* <button type="submit" className='btn btn-success'>View PDF</button> */}
      </form>

      <button class="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-sm px-10 py-2 text-xl mt-6"  onClick={handleClickOpen} >
        Save Information
      </button>

      {/* <h2>View PDF</h2> */}
      {/* <div className='pdf-container'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
          {viewPdf && <>
            <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
          </>}
          {!viewPdf && <>No PDF</>}
        </Worker>
      </div> */}
    </div>


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