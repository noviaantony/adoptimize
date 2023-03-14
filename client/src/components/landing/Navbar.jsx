import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography, Dropdown } from "antd";
import { useEffect, useState } from "react";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";

// import { getComments, getOrders } from "../../API";

function Navbar() {

  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const items = [
    {
      key: "1",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="/">
          Logout
        </Link>
      ),
    },
  ];

  return (
    <div className="AppHeader mx-5">
      <div>
        <Image
          width={150}
          src={require("./Adoptimize.png")}
          alt="AdoptimizeLogo"
          className="mt-5"
        ></Image>
      </div>

      <Space>
        <Link
          type="button"
          class="text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          to="/AdopterLogIn"
        >
          Adopter Log In
        </Link>

        <Link
          type="button"
          class="text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          to="/ShelterLogIn"
        >
          Shelter Log In
        </Link>
      </Space>
    </div>
  );
}
export default Navbar;
