import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const Ongoing = () => {

  const [value, setValue] = React.useState(null);


  const steps = [
  'Apply',
  'Quiz & Pre-Screening Question',
  'Document Checks',
  'Zoom Interview & Homecheck',
   'Approval',
  'Schedule Collection',
  'Payment',
  'Trial Week',
  'Post-Adoption Follow-Up',
  'Adoption Complete'

];

const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("Singapore");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };


  return (
    <div  className = "mt-12 mb-32 font-nunito">
      
      <Box sx={{ width: '100%', font: 'nunito'}}>
      <Stepper activeStep={6} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>


    {/* pet you are adopting */}
    <div className="flex justify-center mt-16">
      <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row  w-6/6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/> */}
      <img class="w-32 h-32 my-5 mx-5 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="Bonnie image"/>
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h1 class="mb-2 text-4xl font-bold  text-gray-900 dark:text-white">Your are giving Timothee Catlamet a forever home!</h1>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur tempore dignissimos quae eos facilis voluptate ipsam corrupti provident fugit.</p>
      </div>
      </div>
    </div>

  {/* payment form */}  
    {/* <div className="flex flex-col justify-start items-start w-full space-y-9 ml-96">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
          <div className="p-8 flex flex-col lg:w-full xl:w-3/5">
                <div className="mt-8">
                  <label className="mt-8 text-base leading-4 text-gray-800">Email</label>
                    <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
                </div>
                <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                <div className="mt-2 flex-col">
                    <div>
                        <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
                    </div>
                    <div className="flex-row flex">
                        <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                        <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                    </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                <div className="mt-2 flex-col">
                    <div>
                        <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                    </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
                <div className="mt-2 flex-col">
                    <div className="relative">
                        <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                            {country}
                        </button>
                        <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                            {countries.map((country) => (
                                <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
                                    {country}
                                </div>
                            ))}
                        </div>
                    </div>
                    <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
                </div>

                <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                    <div>
                        <p className="text-base leading-4">Make Payment</p>
                    </div>
                </button>
            </div>
        </div>
    </div> */}
    {/* payment form end */} 









   

  


    
    


    </div>
  )
}

export default Ongoing;
