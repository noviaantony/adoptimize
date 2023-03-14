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
  Form,
  Radio,
  Tabs,
  Modal,
  divider,
  notification
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";
import { StyleProvider } from "@ant-design/cssinjs";
import SurveyCreatorRenderComponent from "../components/prescreening/SurveyCreatorComponent";

import Personal from "../components/prescreening/Personal";
import Homebased from "../components/prescreening/Homebased";
import Catcare from "../components/prescreening/Catcare";
import Household from "../components/prescreening/Household";
import CatExperience from "../components/prescreening/CatExperience";
import Lifestyle from "../components/prescreening/Lifestyle";

const Prescreening = () => {

  const [size, setSize] = useState("small");

  const onChange = (e) => {
    setSize(e.target.value);
  };

  const tabs = [
    {
      tab: `Personal Information`,
      key: 1,
      content: <Personal/>,
    },
    {
      tab: `Household Information`,
      key: 2,
      content: <Homebased/>,
    },
    {
      tab: `Lifestyle Information`,
      key: 3,
      content: <Lifestyle/>,
    },
    {
      tab: `Experience with Cats`,
      key: 4,
      content: <CatExperience/>,
    },
    {
      tab: `Home Information`,
      key: 5,
      content: <Homebased/>,
    },
    {
      tab: `Cat Care Knowledge`,
      key: 6,
      content: <Catcare/>,
    },
 
    {
      tab: `Customise Question`,
      key: 7,
      content: <SurveyCreatorRenderComponent />,
    },
  ];

  

  const warning = () => {
    Modal.warning({
      title: "Are you sure you would like to save these pre-screening questions?",
      content: "these questions will be automatically updated and relfected on the adopter's application form!",
    });
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    });
  };


  return (


    <Space direction="vertical table">
      <Typography.Title className="font-nunito font-bold font-6x mt-5">
        Pre-Screening Questions
      </Typography.Title>

      <div>
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={size}
          className="font-nunito"
        >
          {tabs.map((tab) => (
            <Tabs.TabPane tab={tab.tab} key={tab.key}>
              {tab.content}
            </Tabs.TabPane>
          ))}
        </Tabs>
        <button
          block
          type="button"
          class=" text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={warning}
          

        >
          Save Questions
        </button>
      </div>
    </Space>
  );
};

export default Prescreening;
