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
} from "antd";
import { HolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./../App.css";
import { StyleProvider } from "@ant-design/cssinjs";
import SurveyCreatorRenderComponent from "../components/prescreening/SurveyCreatorComponent";


const Prescreening = () => {
  return (
    <Space direction="vertical table">
      <Typography.Title
        className="font-nunito font-bold font-6x mt-5"
      >
        Pre-Screening Questions
      </Typography.Title>
      <SurveyCreatorRenderComponent/>
    </Space>
  );
};

export default Prescreening;
