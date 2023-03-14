import { useEffect, useState } from "react";
import {
  Avatar,
  Rate,
  Space,
  Table,
  Typography,
  Tabs,
  Tag,
  Dropdown,
  message,
  Button,
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import './../App.css';
import { StyleProvider } from "@ant-design/cssinjs";
import InProgress from "../components/adoptions/InProgress";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const columns = [
  {
    title: "Pet Id",
    dataIndex: "petId",
    key: "petId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Breed",
    dataIndex: "breed",
    key: "breed",
  },
  {
    title: "Date in Shelter",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { statuses }) => (
      <>
        {statuses.map((tag) => {
          let color = "green";
          if (tag === "rejected") {
            color = "red";
          } else if (tag === "withdrawn") {
            color = "grey";
          } else if (tag === "in progress") {
            color = "green";
          } else {
            color = "blue";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, actions) => (
      <Dropdown
        menu={{
          items,
          onClick,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {/* Actions
            <DownOutlined /> */}
            <HolderOutlined />
          </Space>
        </a>
      </Dropdown>
    ),
  },
];

const data = [
  {
    petId: "0001",
    name: "Sir Meowington",
    breed: "Tabby",
    date: "2021-01-01",
    statuses: ["payment pending", "in progress"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["contract pending", "in progress"],
  },
];

const items = [
  {
    label: "Cancel Adoptions",
    key: "1",
  },
];

const { TabPane } = Tabs;


const InProgressTab = () => {
  return (
    <>
      <InProgress/>
    </>
  );
};

const WaitListTab = () => {
  return (
    <div>
      <p>This is the content of Tab B.</p>
    </div>
  );
};

const RejectedTab = () => {
  return (
    <div>
      <p>This is the content of Tab C.</p>
    </div>
  );
};


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
      <Tabs defaultActiveKey="1" centered className="font-nunito">
        <TabPane tab="In Progress" key="1">
          <InProgressTab />
        </TabPane>
        <TabPane tab="Waitlisted" key="2">
          <WaitListTab />
        </TabPane>
        <TabPane tab="Rejected" key="3">
          <RejectedTab />
        </TabPane>
        <TabPane tab="Withdrawn" key="4">
          <RejectedTab />
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
