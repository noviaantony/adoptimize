import { useEffect, useState , useRef} from "react";
import {
  Space,
  Typography,
  Table,
  DatePicker
} from "antd";

import Graph from '../components/finances/Graph'
import Graph2 from '../components/finances/Graph2'



const Finances = () => {

  const columns = [

    {
      title: "Transaction ID",
      dataIndex: "transId",
      key: "transId",
    },
    {
      title: "Pet ID",
      dataIndex: "petId",
      key: "petId",
    },
    {
      title: "Pet Name",
      dataIndex: "petName",
      key: "petName",
    },
    {
      title: "Adopter ID",
      dataIndex: "adopterId",
      key: "adopterId",
    },
    {
      title: "Adopter Name",
      dataIndex: "adopterName",
      key: "adopterName",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
    // {
    //   title: "Payment Method",
    //   dataIndex: "paymentMethod",
    //   key: "paymentMethod",
    // },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const data = [
    {
      key: "1",
      transId: 1,
      petId: 7,
      petName: "Felix",
      adopterId: 6,
      adopterName: "John Doe",
      amount: 300,
      date: "2023-03-23",
    },
    {
      key: "2",
      transId: 2,
      petId: 12,
      petName: "Pepper",
      adopterId: 13,
      adopterName: "Jack Lee",
      amount: 300,
      date: "2023-03-23",
    },
  ];




  return (
  
    <>
      <Space direction="vertical table">
        <Typography.Title
          // level={4}
          className="font-nunito font-bold font-6x mt-5"
        >
          Financial Summary
        </Typography.Title>

        <div className="container  px-4 py-5">
          <div className="mb-8">
            <Graph2/>
            <Table columns={columns} dataSource={data}
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
            }}/>

          </div>
        </div>





      </Space>

    </>
  );


}

export default Finances