import { useEffect, useState } from "react";
import {
  Space,
  Typography,
  Table
} from "antd";
import { Bar } from 'react-chartjs-2';


const Finances = () => {



  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState({});


  useEffect(() => {
    // Fetch transactions data from your API or data source
    // Then update the state with the fetched data
    const fetchData = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
      updateChartData(data);
    };

    fetchData();
  }, []);

  const fetchTransactions = async () => {
    // Replace this with your actual API call
    return []; // Fetched data
  };

  const updateChartData = (data) => {
    // Process the data to create chart data
    const chartData = {}; // Processed chart data
    setChartData(chartData);
  };

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
   

    {
      title: 'Pet ID',
      dataIndex: 'petId',
      key: 'petId',
    },
    {
      title: 'Adoption Fee',
      dataIndex: 'adoptionFee',
      key: 'adoptionFee',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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

        <div className="container mx-auto px-4 py-5">
          <div className="mb-8">
            <div>
              {/* <Bar /> */}
            </div>
            {/* <h2 className="text-xl font-semibold mb-3 font-nunito mb-1">Transactions</h2> */}
            <Table dataSource={transactions} columns={columns} rowKey="transactionId" />
          </div>
        </div>





      </Space>

    </>
  );


}

export default Finances