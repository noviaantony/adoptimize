import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography, Dropdown } from "antd";
import { useEffect, useState } from "react";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";

// import { getComments, getOrders } from "../../API";


function Header() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const items = [
    {
      key: "1",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to ="/"
        >
          Logout
        </Link>
      ),
    },
  
  ];

  return (
    <div className="AppHeader">
      <div>
        <Image
          width={150}
          src={require("./Adoptimize.png")}
          alt="AdoptimizeLogo"
          className="mt-5"
        ></Image>
        <Image
          width={150}
          src={require("./Shelter.png")}
          alt="Logo"
          className="mt-5"
        ></Image>
      </div>

      <Space>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 20 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>

        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button className="border-none focus-none">
            {/* mou */}
            <Avatar
              style={{
                backgroundColor: "#F7AF7A",
                fontSize: 10,
                verticalAlign: "middle",
              }}
              className="font-nunito"
            >
              Anna
            </Avatar>
          </Button>
        </Dropdown>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default Header;
