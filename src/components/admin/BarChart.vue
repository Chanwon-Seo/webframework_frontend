<template>
  <div>
    <p v-if="loading">로딩 중...</p>
    <Bar v-if="!loading" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    chartData: {
      handler() {
        // 데이터가 변경될 때마다 로딩 상태를 false로 변경
        this.loading = false;
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>
