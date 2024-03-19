<template>
  <div class="card">
    
    <div class="card-body rounded-lg bg-white">
      
      <div class="card-title mb-4">Chart Name</div>

      <div class="h-[250px]">

        <Bar :options="chartOptions" :data="chartData" />
      </div>
    
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            data: [40, 20, 12],
            backgroundColor: ["#2E3192", "#FBBF0A", "#0F172A"],
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false
      },
    };
  },
};
</script>
