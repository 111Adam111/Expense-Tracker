import { useAppSelector } from "@/app/hooks";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = useAppSelector((state) => state.transactions.data);

  const categories: string[] = [];
  const categoryAmounts: { [key: string]: number } = {};

  data?.forEach((record) => {
    const { category, amount } = record;

    if (categoryAmounts[category]) {
      categoryAmounts[category] += amount;
    } else {
      categoryAmounts[category] = amount;
      categories.push(category);
    }
  });

  const amounts: number[] = categories.map((category) => categoryAmounts[category]);


  return (
    <div style={{ width: "20rem", height: "20rem", margin: "10px" }}>
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
