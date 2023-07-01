import { useAppSelector } from "@/app/hooks";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = useAppSelector((state) => state.transactions.data);
  console.log(data)
  let amounts: number[] = []
  let categories: string[] = []
  data?.forEach(record => {
    amounts.push(record.amount)
    categories.push(record.category)
  });
  console.log(amounts)
  return (
    <div style={{ width: "400px", height: "400px", margin: "10px" }}>
      <Doughnut
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
        data={{
          labels: categories,
          datasets: [
            {
              data: amounts,
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutChart;
