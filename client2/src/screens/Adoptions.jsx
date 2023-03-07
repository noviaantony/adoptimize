import { useEffect, useState } from "react";
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
} from "antd";
import { DownOutlined } from "@ant-design/icons";

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
          actions,
          onClick,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Actions
            <DownOutlined />
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
    statuses: ["in progress"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["in shelter"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["rejected"],
  },
  {
    petId: "0001",
    name: "Sir Meowington",
    breed: "Tabby",
    date: "2021-01-01",
    statuses: ["in progress"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["in shelter"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["rejected"],
  },
  {
    petId: "0001",
    name: "Sir Meowington",
    breed: "Tabby",
    date: "2021-01-01",
    statuses: ["in progress"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["in shelter"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["rejected"],
  },
  {
    petId: "0001",
    name: "Sir Meowington",
    breed: "Tabby",
    date: "2021-01-01",
    statuses: ["in progress"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["in shelter"],
  },
  {
    petId: "0002",
    name: "Timothee",
    breed: "British Shorthair",
    date: "2020-01-01",
    statuses: ["rejected"],
  },
];


const actions = [
  {
    key: "1",
    label: (
      <a

      >
        Edit Pet Name
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a

      >
        Edit Pet Fee
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
 
      >
        View Pet Page
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
    
      >
        Delete Pet
      </a>
    ),
  },
];


const Adoptions = () => {
  return (
    <Space direction="vertical">
      <Typography.Title
        // level={4}
        className="font-nunito font-bold font-6x mt-5"
      >
        All Pets
      </Typography.Title>
      <Table columns={columns} dataSource={data} className="font-nunito text-grey-700 shadow-md" />
    </Space>
  );
};

export default Adoptions;
