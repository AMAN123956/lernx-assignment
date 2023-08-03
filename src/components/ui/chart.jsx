import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      datasets: [
        {
          data: [2,0.2,2,0.2,2,0.2,2,0.2,2,0.2,2,0.2,2,0.2], // 40% filled, 2% gap, 58% empty
          backgroundColor: ["#8b5cf6","white","#8b5cf6","white","#8b5cf6","white","#ddd6fe","white","#ddd6fe","white","#ddd6fe","white","#ddd6fe","white"],
          borderWidth: 0,
        },
      ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '70%', // Adjust the size of the donut hole (optional)
      };

    // Destroy any existing chart before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} width={150} height={150} />;
};

export default DonutChart;
