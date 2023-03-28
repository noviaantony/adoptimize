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
  Carousel,
  Steps,
  Modal
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

import {
  IoMdPaw,
  IoMdList,
  IoMdCheckmarkCircleOutline,
  IoIosWallet,
  IoIosHome,
  IoIosDocument
} from "react-icons/io";
import { TbVaccine } from "react-icons/tb";
import AdoptionService from "../services/AdoptionService";
import adoptionService from "../services/AdoptionService";
import Contract2 from "../screens/Contract2"


const { confirm } = Modal;
const { Step } = Steps;
const steps = [
  {
    title: "Pre-Screening",
    status: "wait",
    icon: <IoMdList />,
  },
  {
    title: "Home Check",
    status: "wait",
    icon: <IoIosHome />,
  },
  {
    title: "Adoption Contract",
    status: "wait",
    icon: <IoIosDocument />,
  },
  {
    title: "Payment",
    status: "wait",
    icon: <IoIosWallet />,
  },
  {
    title: "Collection",
    status: "wait",
    icon: <IoMdPaw />,
  },
  {
    title: "Post Adoption",
    status: "wait",
    icon: <TbVaccine/>,
  },
];

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

const items = [
  {
    label: "View Adoption Details",
    key: "1",
  },
];



const AdoptionDetail = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const { applicationId } = useParams();
  const [adoptionApplication, setAdoptionApplication] = useState({});
  const [pet, setPet] = useState({});
  const [phase, setPhase] = useState("");

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);


  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  // extract adoption application details
  useEffect(() => {
    AdoptionService.getAdoptionById(applicationId).then((res) => {
      setAdoptionApplication(res);
        setPet(res.pet);
        setCurrent(adoptionApplication.phaseOfAdoption)
        if (current === 0) {
          setPhase("Pre-Screening")
        } else if (current === 1) {
          setPhase("Home Check")
        } else if (current === 2) {
          setPhase("Adoption Contract")
        } else if (current === 3) {
          setPhase("Payment")
        } else if (current === 4){
          setPhase("Collection")
        } else if (current === 5){
          setPhase("Post Adoption")
        }
    });

  }, [adoptionApplication, current]);

  // useEffect(() => {
  //   console.log(adoptionApplication);
  // }, [adoptionApplication]);

  // useEffect(() => {
  //   console.log(pet);
  //
  // }, [pet]);


  const showConfirmPhase = () => {
    if (current === 0) {
      setPhase("Pre-Screening")
    } else if (current === 1) {
      setPhase("Home Check")
    } else if (current === 2) {
      setPhase("Adoption Contract")
    } else if (current === 3) {
      setPhase("Payment")
    } else if (current === 4){
      setPhase("Collection")
    } else if (current === 5){
      setPhase("Post Adoption")
    }
    confirm({
      title: "Would you like to approve the " +
          "" + phase + " phase?",
      icon: <ExclamationCircleFilled />,
      content: "",
      onOk() {
        AdoptionService.approveAdoptionPhase(applicationId).then((res) => {
          console.log(res);
            setOpen(false);
            window.location.href = `/AdoptionDetails/${applicationId}`;
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showConfirmStart = () => {
    confirm({
      title: "Do you want to start this adoption application?",
      icon: <ExclamationCircleFilled />,
      content: "Once you start the status of the application will be changed to 'in progress'.",
      onOk() {
        AdoptionService.startAdoptionProcess(applicationId).then((res) => {
            console.log(res);
            setOpen(false);
            window.location.href = `/AdoptionDetails/${applicationId}`;
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Space direction="vertical table">
        <Breadcrumb
          className="mt-10"
          items={[
            {
              title: <Link to="/Adoptions">Adoption Management</Link>,
            },
            {
              title: "Adoption Details",
            },
          ]}
        />

        <div className="grid grid-cols-2">
          <div className="font-nunito flex content-start">
            <Typography.Title
              // level={4}
              className="font-nunito font-bold font-6xl mt-5 mr-4"
            >
              Adoption Details
            </Typography.Title>
            <div className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 rounded-xl h-10 mt-6 
            ${adoptionApplication.currStatus === "In Progress" ? 'bg-green-200 text-green-700' :
                (adoptionApplication.currStatus === "New" ? 'bg-blue-200 text-blue-700' :
                    (adoptionApplication.currStatus === "Withdrawn" ? 'bg-yellow-200 text-yellow-700':
                        (adoptionApplication.currStatus === "Pending Collection"?'bg-purple-200 text-purple-700':
                            (adoptionApplication.currStatus === "Rejected" ? 'bg-red-200 text-red-700':''))))}`}>
              {adoptionApplication.currStatus}
            </div>

          </div>
          <Space wrap className="mt-3 ml-96">
            {adoptionApplication.currStatus === "In Progress" || adoptionApplication.currStatus === "Pending Collection" ? (
                <div>
                  <button
                      type="button"
                      className="text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                      onClick={showConfirmPhase}
                  >
                    Approve Adoption Phase
                  </button>
                  <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-white hover:text-[#F7AF7A]  focus:z-10 focus:ring-4 focus:ring-gray-200"
                  >
                    Reject
                  </button>
                </div>
            ) : adoptionApplication.currStatus === "New" ? (
                  <div>
                    <button
                        type="button"
                        className="text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={showConfirmStart}
                    >
                      Start
                    </button>
                    <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-white hover:text-[#F7AF7A]  focus:z-10 focus:ring-4 focus:ring-gray-200"
                    >
                      Reject
                    </button>
                  </div>
              ): null }
          </Space>
        </div>

        <div className="font-nunito flex content-start">
          <div className="w-3/6 bg-orange-100 rounded-2xl mr-5">
            {/*  adoption fee, date joined */}

            <div className="grid grid-cols-2">
              <div>
                <h2 className="m-5">
                  <b>Name: </b>{pet.name}
                </h2>
                <h2 className="m-5">
                  <b>Id: </b>{pet.petId}
                </h2>
                <h2 className="m-5">
                  <b>Breed: </b>{pet.breed}
                </h2>
                <h2 className="m-5">
                  <b>Age: </b>{pet.age} year(s)
                </h2>
              </div>
              <div>
                <h2 className="m-5">
                  <b>Weight: </b>{(pet.weight/2.2).toFixed(2)} kg
                </h2>
                <h2 className="m-5">
                  <b>Medical Details: </b> {pet.medical}
                </h2>
                <h2 className="m-5">
                  <b>Adoption Fee: </b> {pet.adoptionFee} SGD
                </h2>
                <h2 className="m-5">
                  <b>Date Joined: </b> {pet.dateJoined}
                </h2>
              </div>
            </div>
          </div>
          <Image
            width={800}
            className="rounded-xl ml-3"
            src={pet.imageAddress}
          />
          <div className="w-3/6 bg-orange-200 rounded-2xl ml-8">
            {/*  adoption fee, date joined */}
            <div className="grid grid-cols-2">
              <div>
                <h2 className="m-5">
                  <b>Name: </b>{adoptionApplication.adopterName}
                </h2>
                <h2 className="m-5">
                  <b>Id: </b>{adoptionApplication.id}
                </h2>
                <h2 className="m-5">
                  <b>Contact: </b>+65 1234 5678
                </h2>
                <h2 className="m-5">
                  <b>DOB: </b>04/05/1993
                </h2>
              </div>
              <div>
                <h2 className="m-5">
                  <b>Email: </b>{adoptionApplication.adopterName}@example.com
                </h2>
                <h2 className="m-5">
                  <b>Application Date: </b>{adoptionApplication.dateOfApplication}
                </h2>
                <h2 className="m-5">
                  <b>Preferred Contact Days: </b> Wednesday
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Steps current={current} items={items} className="mt-10 font-nunito" />

        <Typography.Title className="font-nunito font-xl mt-10 ml-4" level={2}>
          Pre-Screening Responses
        </Typography.Title>


        {/*why do you want to adopt a cat,
        how would you describe your lifestyle?, how much time do you typically spend at home,
        do you frequently travel?, what type house do you live in?, do you rent or own your home?, do you have a backyard or outdoor space.
        how many adults live in your home?*/}

        <div className="grid grid-cols-3">

        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
          <h3 className="font-nunito text-sm font-black m-5 pt-5">
            Have you owned a cat before?
          </h3>
          <p className="m-5 pb-4">
            Yes
          </p>
        </div>
        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
          <h3 className="font-nunito text-sm font-black m-5 pt-5">
            Why do you want to adopt a cat?
          </h3>
          <p className="m-5 pb-4">
            I want to adopt a cat because I love animals and I think they make great companions. I also enjoy taking care of them and providing them with a loving home.
          </p>
        </div>
        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
          <h3 className="font-nunito text-sm font-black m-5 pt-5">
            How would you describe your lifestyle?
          </h3>
          <p className="m-5 pb-4">
            I would say that I have a fairly active lifestyle. I enjoy going for walks and spending time outdoors, but I also like to relax at home with a good book or movie.
          </p>
        </div>
        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
          <h3 className="font-nunito text-sm font-black m-5 pt-5">
            How much time do you typically spend at home?
          </h3>
          <p className="m-5 pb-4">
            I work from home, so I am typically at home most of the day. However, I do like to go out and run errands or meet up with friends on occasion.
          </p>
        </div>
        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
          <h3 className="font-nunito text-sm font-black m-5 pt-5">
            Do you frequently travel?
          </h3>
          <p className="m-5 pb-4">
            No
          </p>
        </div>
        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
          <h3 className="font-nunito text-sm font-black m-5 pt-5">
            What type of house do you live in?
          </h3>
          <p className="m-5 pb-4">
            I live in a 5 room HDB flat in Jurong West.
          </p>
        </div>
        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
          <h3 className="font-nunito text-sm font-black m-5 pt-5">
            What qualities are you looking for in a cat?
          </h3>
          <p className="m-5 pb-4">
            Nothing much, I just want to care for the pet!
          </p>
        </div>
        <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
        <h3 className="font-nunito text-sm font-black m-5 pt-5">
          Do you rent or own your home?
        </h3>
        <p className="m-5 pb-4">
          Own
        </p>
      </div>
      <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
        <h3 className="font-nunito text-sm font-black m-5 pt-5">
          Do you have a backyard or outdoor space?
        </h3>
        <p className="m-5 pb-4">
          No
        </p>
      </div>
      <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
        <h3 className="font-nunito text-sm font-black m-5 pt-5">
          How many adults live in your home?
        </h3>
        <p className="m-5 pb-4">
          2 -  My husband and Myself
        </p>
      </div>
      <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
        <h3 className="font-nunito text-sm font-black m-5 pt-5">
          How many children live in your home?
        </h3>
        <p className="m-5 pb-4">
          0
        </p>
      </div>
      <div className="w-6/6 bg-white rounded-xl h-30 mt-1 mx-3 my-3">
        <h3 className="font-nunito text-sm font-black m-5 pt-5">
          Do you have any other pets?
        </h3>
        <p className="m-5 pb-4">
          No
        </p>
      </div>
      </div>







        <Typography.Title className="font-nunito font-xl mt-10 ml-4" level={2}>
          Adoption Contract
        </Typography.Title>
        <Contract2/>




      </Space>
    </>
  );
};

export default AdoptionDetail;
