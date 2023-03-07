import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Avatar, Button } from "antd";
// import { getComments, getOrders } from "../../API";


function Header() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // useEffect(() => {
  //   getComments().then((res) => {
  //     setComments(res.comments);
  //   });
  //   getOrders().then((res) => {
  //     setOrders(res.products);
  //   });
  // }, []);

  return (
    <div className="AppHeader">
      <div>
        <Image
          width={150}
          src={require("./Adoptimize.png")}
          alt="AdoptimizeLogo"
          className="mt-5"
        ></Image>
        {/* <Image
          width={150}
          src={require("./Shelter.png")}
          alt="ShelterLogo"
          className="mt-5"
        ></Image> */}
      </div>

      {/* <Typography.Title>Novia's Dashboard</Typography.Title> */}

      <Space>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 20 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>

        <Avatar
          style={{
            backgroundColor: "blue",
            fontSize: 30,
            verticalAlign: "middle",
          }}
          className="font-nunito"
        >
          Anna
        </Avatar>
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
