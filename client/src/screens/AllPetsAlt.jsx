import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Rate,
  Space,
  Table,
  Typography,
  Tag,
  Dropdown,
  message,
  Button,
  Form,
  Radio,
  Switch,
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";

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
    render: (text) => <Link to = "/PetDetails">{text}</Link>,
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
          } else if (tag === "waitlisted") {
            color = "purple";
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
    breed: "Orange Tabby",
    date: "2021-01-01",
    statuses: ["in shelter"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "Siamese x Persian",
    date: "12-01-2023",
    statuses: ["in progress"],
  },
  {
    petId: "0003",
    name: "Catmila Cabello",
    breed: "British Shorthair",
    date: "12-01-2023",
    statuses: ["waitlisted"],
  },

];

const items = [
  {
    label: "Edit Pet Name",
    key: "1",
  },
  {
    label: "Edit Adoption Fee",
    key: "2",
  },
  {
    label: "Edit Pet Breed",
    key: "3",
  },
  {
    label: "Edit Date",
    key: "4",
  },
  {
    label: "Delete Pet",
    key: "5",
  },
  {
    label: "View Pet Listing",
    key: "6",
  },
];


const sharedOnCell = (_, index) => {
  if (index === 1) {
    return {
      colSpan: 0,
    };
  }
  return {};
};

const AllPetsAlt = () => {

  const [searchTerm, setSearchTerm] = useState("");



  return (
    <Space direction="vertical table">
      <Typography.Title
        // level={4}
        className="font-nunito font-bold font-6x mt-5"
      >
        All Pets
      </Typography.Title>

      <div class="w-full bg-[#FDEDE1] rounded-lg font-nunito">
        <h1 className="text-5xl text-gray-600 mx-52 mt-52">Integrate your existing pet data into adoptimize</h1>
        
        <div>
          <i className = "text-gray-400 text-xl ml-80">Note: Ensure that the format of the CSV file is correct before uploading the data</i>
        </div>
        <button className="ml-86">Upload CSV File</button>
      </div>
  

    </Space>
  );
};

export default AllPetsAlt;
