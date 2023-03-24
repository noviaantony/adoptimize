import { Menu, Image } from "antd";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  MdPets,
  MdDashboard,
  MdEditDocument,
  MdOutlineEditNote,
  MdSettings,
  MdAttachMoney,
  MdQuestionMark
} from "react-icons/md";



function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    "",
    "grp",
    null,
    [
      getItem("All Pets", "1", <MdPets/>),
      getItem("Adoption Management", "2", <MdDashboard/>),
      getItem("Pre-Screening Questions", "3", <MdOutlineEditNote/>),
      getItem("Adoption Contract", "4", <MdEditDocument/>),
      getItem("Finances", "5", <MdAttachMoney/>),
      getItem("FAQ", "6", <MdQuestionMark/>),
      getItem("Settings", "7", <MdSettings/>),  
    ],
    "group"
  ),
];



const Sidebar = () => {

  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    if (e.key == "1") {
      navigate("/");
    } else if (e.key == "2") {
      navigate("/Adoptions");
    } else if (e.key == "3") {
      navigate("/PreScreeningQuestions");
    } else if (e.key == "4") {
      navigate("/AdoptionContract");
    } else if (e.key == "5") {
      navigate("/Finances");
    } else if (e.key == "6") {
      navigate("/FAQ");
    } else if (e.key == "7") {
      navigate("/Settings");
    } 

  };

  return (
  
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={onClick}
        style={{
          width: 256,
          height: 2000,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
      />
    </div>
  );


}

export default Sidebar