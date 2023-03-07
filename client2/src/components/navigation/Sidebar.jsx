
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdPets,
  MdDashboard,
  MdEditDocument,
  MdOutlineEditNote,
  MdSettings,
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
      getItem("Adoptions", "2", <MdDashboard/>),
      getItem("Pre-Screening Questions", "3", <MdOutlineEditNote/>),
      getItem("Adoption Contract", "4", <MdEditDocument/>),
      getItem("Settings", "5", <MdSettings/>),
    ],
    "group"
  ),
];


const Sidebar = () => {

  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="SideMenu">
      <Menu

        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>

   
  );


}

export default Sidebar