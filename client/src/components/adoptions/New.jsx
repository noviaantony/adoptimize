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
// import "./../App.css";
import { StyleProvider } from "@ant-design/cssinjs";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const columns = [
  {
    title: "Application Id",
    dataIndex: "applicationId",
    key: "applicationId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Pet Name",
    dataIndex: "petName",
    key: "petName",
  },
  {
    title: "Adopter Name",
    dataIndex: "adopterName",
    key: "adopterName",
  },
  {
    title: "Date of Application",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color = "";
      if (status === "In Progress") {
        color = "green";
      } else if (status === "New") {
        color = "blue";
      } else if (status === "Cancelled") {
        color = "grey";
      } else {
        color = "red";
      }
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
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
    applicationId: "12343",
    petName: "Meowington",
    adopterName: "Easter Tan",
    date: "01-01-2023",
    startDate: "02-01-2023",
    endDate: "-",
    status: "In Progress",
  },
  {
    applicationId: "12343",
    petName: "Timothee",
    adopterName: "Kendrik",
    date: "01-01-2023",
    startDate: "03-01-2023",
    endDate: "03-01-2023",
    status: "Rejected",
  },
  {
    applicationId: "12343",
    petName: "Timothee",
    adopterName: "Ed Sheeren",
    date: "01-01-2023",
    startDate: "03-01-2023",
    endDate: "03-01-2023",
    status: "Cancelled",
  },
  {
    applicationId: "12343",
    petName: "Catmilla Cabello",
    adopterName: "Emma Ng",
    date: "05-01-2023",
    startDate: "-",
    endDate: "-",
    status: "New",
  },
];

const items = [
  {
    label: "Start Adoption Process",
    key: "1",
  },
  {
    label: "Reject Adoption",
    key: "2",
  },
];

const New = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <form className="m-5 mx-50">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 font-nunito"
        >
          Search
        </label>
        <div className="relative ">
          <div className="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row">
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
              placeholder="Search by Pet Name or Pet ID"
              required=""
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <Table
        className="font-nunito text-grey-700 shadow-md rounded-2xl "
        columns={columns}
        style={{ backgroundColor: "#FDEDE1" }}
        dataSource={data.filter((val) => {
          if (val.status == "New") {
            if (searchTerm == "") {
              return val;
            } else if (
              val.petName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }
        })}
        components={{
          header: {
            cell: (props) => (
              <th
                {...props}
                style={{
                  backgroundColor: "#FDEDE1",
                  fontWeight: "bold",
                  font: "font-nunito",
                }}
              />
            ),
          },
        }}
      />
    </>
  );
};

export default New;
