import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
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
import petService from "../services/PetService";
import adoptionService from "../services/AdoptionService";

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
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Adopter's Name",
    dataIndex: "adopterName",
    key: "adopterName",
    render: (text) => <Link to="/AdoptionDetails">{text}</Link>,
  },
  {
    title: "Date of Application",
    dataIndex: "dateOfApplication",
    key: "dateOfApplication",
  },
  {
    title: "Status",
    key: "currStatus",
    dataIndex: "currStatus",
    render: (currStatus) => {
      let color = "";
      if (currStatus === "In Progress") {
        color = "green";
      } else if (currStatus === "New") {
        color = "blue";
      } else if (currStatus === "Cancelled") {
        color = "grey";
      } else {
        color = "red";
      }
      return <Tag color={color}>{currStatus.toUpperCase()}</Tag>;
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
    adopterId: "A0001",
    name: "Anna Lim",
    date: "01-01-2023",
    statuses: ["in progress"],
  },
  {
    adopterId: "A0002",
    name: "Robert Thomas",
    date: "08-02-2023",
    statuses: ["rejected"],
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
  const[petDetails, setPetDetails] = useState([]);
    const[petAdoptions, setPetAdoptions] = useState([]);
    let statusNew = 0;
    let statusInProgress = 0;
    let statusWithdrawn = 0;
    let statusRejected = 0;
  const { petId } = useParams();

  function countStatuses() {
    for (let i = 0; i < petAdoptions.length; i++) {

        if (petAdoptions[i].currStatus === "New") {
            statusNew++;
        } else if (petAdoptions[i].currStatus === "In Progress") {
          console.log(petAdoptions[i].currStatus)
            statusInProgress++;
        } else if (petAdoptions[i].currStatus === "Withdrawn") {
            statusWithdrawn++;
        } else if (petAdoptions[i].currStatus === "Rejected") {
          console.log(petAdoptions[i].currStatus)
            statusRejected++;
        }
    }
  }


  useEffect(() => {
    petService.getPetById(petId).then((res) => {
        setPetDetails(res);
      // console.log(res);
    });
    }, []);

  useEffect(() => {
        adoptionService.getPetAdoptions(petId).then((res) => {
          setPetAdoptions(res);
          console.log("pet adoptions")
          console.log(res);

        });
  }, []);

  useEffect(() => {
    console.log(petDetails);
  }, [petDetails]);

  useEffect(() => {
    // console.log("petAdoptions")
    console.log(petAdoptions);

  }, [petAdoptions]);
  countStatuses();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  console.log(petId);

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

      <div className="flex my-2 mb-5 justify-start">
        <div class="w-1/6 font-default mr-4">
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg flex items-stretch  drop-shadow-sm font-default cursor-pointer h-30 shadow-md">
            <div className="ml-12 mt-2 text-xl text-center font-semibold text-gray-700 ">
              <h1 class="text-4xl text-center font-bold"> {statusNew} </h1>
              <h5 class="text-xs text-center">New Applications </h5>
            </div>
          </div>
        </div>

        <div class="w-1/6 font-default mr-4">
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg flex items-stretch  drop-shadow-sm font-default cursor-pointer h-30 shadow-md">
            <div className="ml-12 mt-2 text-xl text-center font-semibold text-gray-700 ">
              <h1 class="text-4xl text-center font-bold"> {statusInProgress} </h1>
              <h5 class="text-xs text-center"> Application In Progress </h5>
            </div>
          </div>
        </div>

        <div class="w-1/6 font-default mr-4">
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg flex items-stretch  drop-shadow-sm font-default cursor-pointer h-30 shadow-md">
            <div className="ml-12 mt-2 text-xl text-center font-semibold text-gray-700 ">
              <h1 class="text-4xl text-center font-bold"> {statusWithdrawn} </h1>
              <h5 class="text-xs text-center"> Withdrawn </h5>
            </div>
          </div>
        </div>

        <div class="w-1/6 font-default ">
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg flex items-stretch  drop-shadow-sm font-default cursor-pointer h-30 shadow-md">
            <div className="ml-12 mt-2 text-xl text-center font-semibold text-gray-700 ">
              <h1 class="text-4xl text-center font-bold"> {statusRejected} </h1>
              <h5 class="text-xs text-center"> Rejected </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="font-nunito flex content-start">
        <Image
          width={800}
          className="rounded-xl mr-5"
          src={petDetails.imageAddress}
        />
        <div className="w-5/6 bg-white ml-16 rounded-2xl">
          <h1 className="m-5 font-bold">Description</h1>
          <p className="m-5">
            {petDetails.description}
          </p>

          {/*  adoption fee, date joined */}

          <div className="grid grid-cols-2">
            <div>
              <h2 className="m-5">
                <b>Name: </b>{petDetails.name}
              </h2>
              <h2 className="m-5">
                <b>Id: </b>{petDetails.petId}
              </h2>
              <h2 className="m-5">
                <b>Breed: </b>{petDetails.breed}
              </h2>
              <h2 className="m-5">
                <b>Age: </b>{petDetails.age}
              </h2>
            </div>
            <div>
              <h2 className="m-5">
                <b>Weight: </b>{(petDetails.weight/2.2).toFixed(2)} kg
              </h2>
              <h2 className="m-5">
                <b>Medical Details: </b>{petDetails.medical}
              </h2>
              <h2 className="m-5">
                <b>Adoption Fee: </b> {petDetails.adoptionFee} SGD
              </h2>
              <h2 className="m-5">
                <b>Date Joined: </b> {petDetails.dateJoined}
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
        dataSource={petAdoptions.filter((val) => {
          if (searchTerm === "") {
            console.log("this is the value" + val)
            return val;
          } else if (
            val.adopterName.toLowerCase().includes(searchTerm.toLowerCase())
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
