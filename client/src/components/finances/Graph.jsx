import { useState, useEffect,useRef } from "react";
import { Chart, registerables } from "chart.js";
import moment from "moment";
import "moment/locale/en-gb";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);


const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Adoption Fee Collected",
      data: [300, 500, 200, 600, 400, 700],
      fill: true,
      backgroundColor: "rgba(253, 237,225, 0.5)",
      borderColor: "rgba(253, 237,225, 2)",
      tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value, index, values) {
          return "$" + value;
        },
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Adoption Fees",
      font: {
        family: "Nunito",
        weight: "bold",
        size: 18,
      },
    },
  },
};

const Graph = () => {

  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartContainer.current, {
      type: "line",
      data: data,
      options: options,
    });
  }, []);

  return (

    <div>
      <Line
        data={data}
        options={options}
        height={100}
        className="font-nunito mb-10"
      />
    </div>
    // <canvas
    //   className="font-nunito mb-10"
    //   ref={chartContainer}
    //   style={{ color: "orange" }}
    // />
  );
};

export default Graph;
