import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgb(0, 199, 79)");
    gradient.addColorStop(1, "rgba(250,174,50,0)");
    return {
      labels: ["1", "2", "20", "80", "10"],
      datasets: [
        {
          label: "TDS",
          fill:"start",
          backgroundColor: gradient, 
          borderColor: "rgb(0, 199, 79)",
          borderWidth: 2,
          pointColor: "#fff",
          pointStrokeColor: "rgb(0, 199, 79)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgb(0, 199, 79)",
          data: [300,100, 56, 50, 68, 80]
        }
      ]
    };
  };

  return (
    <div
      className="lineChart"
    >
      <Line
        options={{
          legend: {
            display: false,
            position: "bottom"
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem) =>
                `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
              title: () => null
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }}
        data={data}
        height={100}
        width={100}
      />
    </div>
  );
};

export default LineChart;