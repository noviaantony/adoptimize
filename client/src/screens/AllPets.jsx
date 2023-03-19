import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Space,
  Table,
  Typography,
  Tag,
  Dropdown,
  message,
  Modal,
  Input 
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";
import petService from "../services/PetService";

const { TextArea } = Input;

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
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Medical Details",
    dataIndex: "medical",
    key: "medical",
  },
  {
    title: "Date Joined",
    dataIndex: "dateJoined",
    key: "dateJoined",
  },
  {
    title: "Date of Birth",
    dataIndex: "birthday",
    key: "birthday",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color = "";
      if (status === "Available") {
        color = "blue";
      } else if (status === "Pending") {
        color = "green";
      } else if (status === "Adopted") {
        color = "red";
      } else {
        color = "purple";
      }
      return (
          <Tag color={color}>
            {status.toUpperCase()}
          </Tag>
      );
    }
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



const AllPets = () => {

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAllPets().then((res) => {
            console.log("Retrieving all pets...");
            // console.log(res)
            let petsData = [];
            for (let i = 0; i < res.length; i++) {
                let pet = res[i];
                let petData = {
                    key: i,
                    petId: pet.petId,
                    name: pet.name,
                    breed: pet.breed,
                    age: pet.age,
                    medical: pet.medical,
                    dateJoined: pet.dateJoined,
                    birthday: pet.birthday,
                    status: pet.status,
                    actions: pet.actions,
                };

                petsData.push(petData);
            }
            setPets(petsData);
        });
    }, []);

  useEffect(() => {
    console.log(pets);
  }, [pets]);

  return (
    <Space direction="vertical table">
      <Typography.Title
        // level={4}
        className="font-nunito font-bold font-6x mt-5"
      >
        All Pets
      </Typography.Title>



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
              placeholder="Search by Pet Name"
              required=""
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <button
              className="ml-4 inline-flex items-center py-2 px-3 text-xs font-xs text-center text-[#354458] font-nunito bg-[#FDEDE1] rounded-lg  focus:outline-none transition duration-300 font-bold hover:text-[#FDEDE1] hover:bg-[#F7AF7A] rounded-4xl"
              type="button"
              onClick={showModal}
            >
              Add Pet
              {/* <PlusCircleOutlined size={80} className="rounded-lg" /> */}
            </button>
            <Modal
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              className="font-nunito"
              okText="Add Pet"
              cancelText="Cancel"

            > 
              <h1 className="text-2xl font-bold mb-2">Add New Pet</h1>
              <h1>Pet Name:</h1>
              <TextArea placeholder="Enter pet name" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Breed:</h1>
              <TextArea placeholder="Enter pet breed" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Age:</h1>
              <TextArea placeholder="Enter pet breed" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Date Joined:</h1>
              <TextArea placeholder="Enter date in the format dd-mm-yr" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Birthday:</h1>
              <TextArea placeholder="Enter birthday in the format dd-mm-yr" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Medical Information:</h1>
              <TextArea placeholder="Enter all medical details separated by commas (eg: Full vaccinated, FIV Negative)" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Status:</h1>
              <TextArea placeholder="Enter the status of the pet - AVAILABLE / IN PROGRESS / REJECTED / WITHDRAWN" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Image:</h1>
              <TextArea placeholder="Enter image address" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Description:</h1>
              <TextArea placeholder="Enter a short description about the pet's personality to be displayed on the pet listing page" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Weight:</h1>
              <TextArea placeholder="Enter a pet's weight in kilograms" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              <h1>Adoption Fee:</h1>
              <TextArea placeholder="Enter adoption fee in SGD" autoSize className="font-nunito"/>
              <div
                style={{
                  margin: '24px 0',
                }}
              />
              
            </Modal>
          </div>
        </div>
      </form>
      <Table
        columns={columns}
        dataSource={pets.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => {
            // Redirect to another page with the ID prop

              window.location.href = `/PetDetails/${record.petId}`;
              // handleRowClick(record.petId)
          },
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
        className="font-nunito text-grey-700 shadow-md rounded-2xl "
      />
    </Space>
  );
};

export default AllPets;
