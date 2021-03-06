import React from "react";
import { Bar } from "react-chartjs-2";

let statsLight = ["rgba(54, 162, 235, 0.2)"];
let statsDark = ["rgba(8,213,90, 0.3)"];
let borderLight = ["rgba(42,60,224, 1)"];
let borderDark = ["rgba(8,213,90, 1)"];

function Stats({ theme, stats }) {
  const data = {
    labels: [
      "Speed",
      "UI/UX Design",
      "Customization",
      "Developer's experience",
      "General usability",
    ],
    datasets: [
      {
        data: [
          stats.speed,
          stats.design,
          stats.customization,
          stats.experience,
          stats.usability,
        ],

        backgroundColor: theme == "light" ? statsLight : statsDark,
        borderColor: theme == "light" ? borderLight : borderDark,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="stats-graph">
      <Bar data={data} options={options} />
    </div>
  );
}

export default Stats;
