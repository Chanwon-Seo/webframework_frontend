<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>재학생 현황</h1>
    <div id="year">
      <BarChart :chart-data="chartData" />
    </div>
  </div>
</template>

<script>
import DepartmentName from "@/components/department/DepartmentName.vue";
import BarChart from "@/components/admin/BarChart.vue";
import axios from "axios";

export default {
  name: "MemberDashBoardPage",
  components: { DepartmentName, BarChart },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            data: []
          }
        ],
      },
    };
  },
  mounted() {
    const url = '/admin/member/status';
    const vm = this;
    axios.post(url)
        .then(function (res) {
          vm.chartData.labels = res.data.labels;
          vm.chartData.datasets[0].data = res.data.data; // Corrected this line
        });
  }
};
</script>

<style>
#year {
  height: 1500px;
  width: 1500px;
}
</style>
