import React from 'react'
import Header from '../../components/common/misc/Header' 
import Ongoing from '../../components/adopter/myapplications/Ongoing';



const MyApplications = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
      <div>
        <Header Title = "My Applications" Description = "keep track of your current adoption, past adoptions and waitlisted pets!"/>
          <div className="w-full">
      <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-16 mt-12"
          role="tablist"
      >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                  className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                      (openTab === 1
                          ? "text-black bg-blue-100"
                          : "text-grey-700 bg-white")
                  }
                  onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
              >
                  On-going
              </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                  className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                      (openTab === 2
                          ? "text-black bg-blue-100"
                          : "text-grey-700 bg-white")
                  }
                  onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
              >
                  Waitlisted
              </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                  className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                      (openTab === 3
                          ? "text-black bg-blue-100"
                          : "text-grey-700 bg-white")
                  }
                  onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
              >
                  Rejected / Cancelled
              </a>
          </li>
          
      </ul>
  </div>
  <Ongoing/>

        
      </div>
    )
  }

export default MyApplications;