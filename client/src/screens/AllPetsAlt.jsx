import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Space, Typography, Tag, Dropdown, message, Upload } from "antd";
import {
  HolderOutlined,
  PlusCircleOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import "./../App.css";


const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

// const onClick = ({ key }) => {
//   message.info(`Click on item ${key}`);
// };

// const columns = [
//   {
//     title: "Pet Id",
//     dataIndex: "petId",
//     key: "petId",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     render: (text) => <Link to = "/PetDetails">{text}</Link>,
//   },
//   {
//     title: "Breed",
//     dataIndex: "breed",
//     key: "breed",
//   },
//   {
//     title: "Date in Shelter",
//     dataIndex: "date",
//     key: "date",
//   },
//   {
//     title: "Status",
//     key: "status",
//     dataIndex: "status",
//     render: (_, { statuses }) => (
//       <>
//         {statuses.map((tag) => {
//           let color = "green";
//           if (tag === "rejected") {
//             color = "red";
//           } else if (tag === "waitlisted") {
//             color = "purple";
//           } else if (tag === "in progress") {
//             color = "green";
//           } else {
//             color = "blue";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "",
//     key: "action",
//     render: (_, actions) => (
//       <Dropdown
//         menu={{
//           items,
//           onClick,
//         }}
//       >
//         <a onClick={(e) => e.preventDefault()}>
//           <Space>
//             {/* Actions
//             <DownOutlined /> */}
//             <HolderOutlined />
//           </Space>
//         </a>
//       </Dropdown>
//     ),
//   },
// ];


// const data = [
//   {
//     petId: "0001",
//     name: "Sir Meowington",
//     breed: "Orange Tabby",
//     date: "2021-01-01",
//     statuses: ["in shelter"],
//   },
//   {
//     petId: "0002",
//     name: "Timothee",
//     breed: "Siamese x Persian",
//     date: "12-01-2023",
//     statuses: ["in progress"],
//   },
//   {
//     petId: "0003",
//     name: "Catmila Cabello",
//     breed: "British Shorthair",
//     date: "12-01-2023",
//     statuses: ["waitlisted"],
//   },

// ];

// const items = [
//   {
//     label: "Edit Pet Name",
//     key: "1",
//   },
//   {
//     label: "Edit Adoption Fee",
//     key: "2",
//   },
//   {
//     label: "Edit Pet Breed",
//     key: "3",
//   },
//   {
//     label: "Edit Date",
//     key: "4",
//   },
//   {
//     label: "Delete Pet",
//     key: "5",
//   },
//   {
//     label: "View Pet Listing",
//     key: "6",
//   },
// ];


// const sharedOnCell = (_, index) => {
//   if (index === 1) {
//     return {
//       colSpan: 0,
//     };
//   }
//   return {};
// };

const AllPetsAlt = () => {





  return (
      <>
    <Space direction="vertical" className="font-nunito">
      <Typography.Title
        // level={4}
        className="font-nunito font-bold font-6x mt-5"
      >
        All Pets
      </Typography.Title>

      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Import your existing shelter data into our system! Ensure that the csv contains the right information in the right order. 
        </p>
      </Dragger>
      <div className="grid grid-cols-2">

        <button block
                type="button"
                className="text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
          Upload CSV File
        </button>
        <button block
                type="button"
                className="text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
          Add Pet Manually
        </button>
      </div>




    </Space>
      </>

        );
};

export default AllPetsAlt;
