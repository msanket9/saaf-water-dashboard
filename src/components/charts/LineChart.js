import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ Graphdata }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgb(0, 199, 79)");
    gradient.addColorStop(1, "rgba(250,174,50,0)");

    return Graphdata;
  };

  return Graphdata ? (
    <div className="lineChart">
      <Line
        options={{
          legend: {
            display: false,
            position: "bottom",
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem) =>
                `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
              title: () => null,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
        data={data}
        height={100}
        width={100}
      />
    </div>
  ) : (
    ""
  );
};

export default LineChart;
