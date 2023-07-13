import { useAppSelector } from "@/app/hooks";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  const amounts: number[] = categories.map(
    (category) => categoryAmounts[category]
  );

  return (
    <Box
      sx={{
        margin: 1,
        padding: 1,
        borderRadius: 5,
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
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
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
        }}
      />
    </Box>
  );
};

export default DoughnutChart;
