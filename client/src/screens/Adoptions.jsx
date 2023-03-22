import {useState} from "react";
import {message, Space, Tabs, Typography,} from "antd";
import './../App.css';
import New from "../components/adoptions/New";
import InProgress from "../components/adoptions/InProgress";
import Cancelled from "../components/adoptions/Withdrawn";
import Rejected from "../components/adoptions/Rejected";
import PendingCollection from "../components/adoptions/PendingCollection";
import PostAdoption from "../components/adoptions/PostAdoption";
import Completed from "../components/adoptions/Completed";

const onClick = ({key}) => {
    message.info(`Click on item ${key}`);
};


const items = [
    {
        label: "Cancel Adoptions",
        key: "1",
    },
];

const {TabPane} = Tabs;


const InProgressTab = () => {
    return (
        <>
            <InProgress/>
        </>
    );
};

const NewTab = () => {
    return (
        <>
            <New/>
        </>
    );
};

const PendingCollectionTab = () => {
    return (
        <>
            <PendingCollection/>
        </>
    );
}

const RejectedTab = () => {
    return (
        <>
            <Rejected/>
        </>
    );
};

const CancelledTab = () => {
    return (
        <>
            <Cancelled/>
        </>
    );
};


function PostAdoptionTab() {
    return (
        <>
            <PostAdoption/>
        </>
    );
};

function CompletedTab() {
    return (
        <>
            <Completed/>
        </>
    );
}

const Adoptions = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <Space direction="vertical table">
            <Typography.Title
                // level={4}
                className="font-nunito font-bold font-6x mt-5"
            >
                Adoption Management
            </Typography.Title>
            <Tabs defaultActiveKey="2" centered className="font-nunito">
                <TabPane tab="New" key="1">
                    <NewTab/>
                </TabPane>
                <TabPane tab="In Progress" key="2">
                    <InProgressTab/>
                </TabPane>
                <TabPane tab="Pending Collection" key="3">
                    <PendingCollectionTab/>
                </TabPane>
                <TabPane tab="Post Adoption" key="4">
                    <PostAdoptionTab/>
                </TabPane>
                <TabPane tab="Completed" key="5">
                    <CompletedTab/>
                </TabPane>
                <TabPane tab="Withdrawn" key="6">
                    <CancelledTab/>
                </TabPane>
                <TabPane tab="Rejected" key="7">
                    <RejectedTab/>
                </TabPane>

            </Tabs>
        </Space>
    );
};

export default Adoptions;


//  <form className="m-5 mx-50">
//         <label
//           htmlFor="default-search"
//           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
//         >
//           Search
//         </label>
//         <div className="relative ">
//           <div className="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
//             <svg
//               aria-hidden="true"
//               className="w-5 h-5 text-gray-500 dark:text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               ></path>
//             </svg>
//           </div>
//           <div className="flex flex-row">
//             <input
//               type="search"
//               id="default-search"
//               className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
//               placeholder="Search by Pet Name or Pet ID"
//               required=""
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//             />

//           </div>
//         </div>
//       </form>
//       <Table
//         columns={columns}
//         dataSource={data.filter((val) => {
//           if (searchTerm == "") {
//             return val;
//           } else if (
//             val.name.toLowerCase().includes(searchTerm.toLowerCase())
//           ) {
//             return val;
//           } else if (
//             val.petId.toLowerCase().includes(searchTerm.toLowerCase())
//           ) {
//             return val;
//           }
//         })}
//         className="font-nunito text-grey-700 shadow-md rounded-2xl "
//       />
