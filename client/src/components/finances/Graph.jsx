import { useState, useEffect,useRef } from "react";
import { Chart, registerables } from "chart.js";
import moment from "moment";
import "moment/locale/en-gb";
import { Line } from "react-chartjs-2";

  useEffect(() => {
    setData([
      // { date: "2022-01-01", value: 20 },
      // { date: "2022-02-01", value: 30 },
      // { date: "2022-03-01", value: 25 },
      // { date: "2022-04-01", value: 40 },
      // { date: "2022-05-01", value: 35 },
      // { date: "2022-06-01", value: 50 },
      // { date: "2022-07-01", value: 45 },
      // { date: "2022-08-01", value: 55 },
      // { date: "2022-09-01", value: 50 },
      // { date: "2022-10-01", value: 60 },
      // { date: "2022-11-01", value: 55 },
      // { date: "2022-12-01", value: 70 },
      { date: "2023-03-23", value: 10 },
      { date: "2023-03-23", value: 10 },
      { date: "2023-03-28", value: 100 },

    ]);
  }, []);

  const filteredData = data.filter((d) => {
    if (startDate === "" || endDate === "") return true;
    return moment(d.date).isBetween(startDate, endDate);
  });

  const labels = filteredData.map((d) => d.date);
  const values = filteredData.map((d) => d.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Amount of Donation",
        data: values,
        fill: false,
        tension: 0.4,
        backgroundColor: "orange",
        borderColor: "orange",
      },
    ],
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
      <>
        <div className="my-5">
          <form className = "font-nunito font-semibold text-xl">

            <label htmlFor="startDate">Start Date: </label>
            <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className = "mr-5"

            />
            <label htmlFor="endDate">End Date: </label>
            <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={handleEndDateChange}
            />
          </form>
        </div>
        <div className="my-5">
          <Line
              data={chartData}
              className = "font-nunito"
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Adoption Fee Collected",
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
                height: 200,
                font: {
                  family: "nunito",
                },
              }}
          />
        </div>
      </>
  );

export default Graph;
