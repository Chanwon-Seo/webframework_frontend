<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {Bar},
  data() {
    return {
      chartData: {
        labels: ['2019', '2020', '2021', '2022', '2023',],
        datasets: [{data: [2500, 2600, 3000, 3400, 4000]}],
        label: 'Data One',
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style>
</style>