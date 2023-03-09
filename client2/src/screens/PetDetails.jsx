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
  Breadcrumb,
  Image,
  Carousel
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const columns = [
  {
    title: "Adopter ID",
    dataIndex: "adopterId",
    key: "adopterId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Adopter's Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Link to="/AdoptionDetails">{text}</Link>,
  },
  {
    title: "Date of Application",
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

          if (tag === "in progress") {
            color = "green";
          } else {
            color = "orange";
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
    adopterId: "A0001",
    name: "Anna Lim",
    date: "01-01-2023",
    statuses: ["in progress"],
  },
  {
    adopterId: "A0002",
    name: "Robert Thomas",
    date: "08-02-2023",
    statuses: ["waitlist"],
  },
];

const items = [

  {
    label: "View Adoption Details",
    key: "1",
  },
];

const PetDetails = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };


  return (
    <Space direction="vertical table">
      <Breadcrumb
        className="mt-10"
        items={[
          {
            title: <Link to="/">All Pets</Link>,
          },
          {
            title: "Pet Details",
          },
        ]}
      />

      <div className="font-nunito flex content-start">
        <Typography.Title
          // level={4}
          className="font-nunito font-bold font-6xl mt-5 mr-4"
        >
          Pet Details
        </Typography.Title>

        <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3  bg-green-200 text-green-700 rounded-xl h-10 mt-6">
          In-Progress
        </div>
      </div>

      {/* waitlist, inprogress, rejected, withdrawn */}

      <div className="grid grid-cols-4 font-nunito justify-center w-4/6">
        <div className="bg-white mt-2 mb-5 rounded-2xl mx-6">
          <h1 className="font-bold text-5xl flex justify-center my-4">2</h1>
          <p className="font-semibold text-xl flex justify-center mb-2 text-[#979aa2]">
            in progress
          </p>
        </div>
        <div className="bg-white mt-2 mb-5 rounded-2xl mx-6">
          <h1 className="font-bold text-5xl flex justify-center my-4">23</h1>
          <p className="font-semibold text-xl flex justify-center mb-2 text-[#979aa2]">
            waitlist
          </p>
        </div>
        <div className="bg-white mt-2 mb-5 rounded-2xl mx-6">
          <h1 className="font-bold text-5xl flex justify-center my-4">4</h1>
          <p className="font-semibold text-xl flex justify-center mb-2 text-[#979aa2]">
            withdrawn
          </p>
        </div>
        <div className="bg-white mt-2 mb-5 rounded-2xl mx-6">
          <h1 className="font-bold text-5xl flex justify-center my-4">8</h1>
          <p className="font-semibold text-xl flex justify-center mb-2 text-[#979aa2]">
            rejected
          </p>
        </div>
      </div>

      <div className="font-nunito flex content-start">
        <Image
          width={800}
          className="rounded-xl mr-5"
          src="https://images.unsplash.com/photo-1592652426689-4e4f12c4aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2lhbWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div className="w-5/6 bg-white ml-16 rounded-2xl">
          <h1 className="m-5 font-bold">Description</h1>
          <p className="m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed
            error magni at earum nostrum quod incidunt ea? Expedita molestias
            error sunt dicta adipisci placeat, vitae impedit aliquid nobis
            temporibus labore doloribus provident eveniet magnam tempore. Alias
            iure pariatur illum delectus quod eaque cupiditate quia? Esse
            aspernatur hic dolor facere officia? Libero adipisci quas amet sunt
            optio exercitationem tempora quis, minus repudiandae! Molestiae
            voluptatibus dolorum quod consequatur ducimus quas dicta saepe
            veniam aspernatur voluptatem, suscipit ipsam voluptas amet. Placeat
            modi repellendus, dignissimos cumque nulla vitae temporibus! Nihil,
            dolores recusandae quod ea, sequi accusantium odit libero sapiente
            dolore ipsum necessitatibus totam!
          </p>

          {/*  adoption fee, date joined */}

          <div className="grid grid-cols-2">
            <div>
              <h2 className="m-5">
                <b>Name: </b>Timothee Catlamet
              </h2>
              <h2 className="m-5">
                <b>Id: </b>A1235
              </h2>
              <h2 className="m-5">
                <b>Breed: </b>Siamese x Persian
              </h2>
              <h2 className="m-5">
                <b>Age: </b>1 year(s)
              </h2>
            </div>
            <div>
              <h2 className="m-5">
                <b>Weight: </b>4.5kg
              </h2>
              <h2 className="m-5">
                <b>Medical Details: </b>Fully Vaccinated, FIV Negative, Slight
                PICA Tendency
              </h2>
              <h2 className="m-5">
                <b>Adoption Fee: </b> 120 SGD
              </h2>
              <h2 className="m-5">
                <b>Date Joined: </b>12/01/2023
              </h2>
            </div>
          </div>
        </div>
      </div>

      <form className="m-5 mx-50">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
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
        columns={columns}
        dataSource={data.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.adopterId.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })}
        className="font-nunito text-grey-700 shadow-md rounded-2xl "
      />

    </Space>
  );
};

export default PetDetails;
