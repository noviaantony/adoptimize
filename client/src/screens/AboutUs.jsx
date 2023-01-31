import React from 'react'
import Header from '../components/misc/Header'
import EditableTable from '../components/aboutus/EditableTable'
import EditableTable2 from '../components/aboutus/EditableTable2'

const AboutUs = () => {
  return (
    <div>
      <Header Title="About Us" Description = "edit your shelter's information and decription here! if you would like to include any other information kindly contact us at adoptsy@gmail.com"/>
      {/* <EditableTable/> */}
      <EditableTable2/>
      <button class="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-xl px-10 py-2">
        Save Information
      </button>
      {/* <button
                className="hover:bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full text-center rounded-md block sm:w-auto font-bold bg-gray-700 text-white hover:text-primary-700"
                type="button"
              >
                Save Questions
              </button>
              <button
                className="hover:bg-primary-500 focus:bg-primary-700  focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-white text-center rounded-md block sm:w-auto font-bold text-gray-700 hover:text-primary-700"
                
                type="button"
              >
                Add Question
              </button> */}
    </div>
  )
}

export default AboutUs
