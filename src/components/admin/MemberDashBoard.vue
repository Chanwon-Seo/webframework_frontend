<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>재학생</h1>
    <div id="year">
      <BarChart/>
    </div>
  </div>
</template>

<script>
import DepartmentName from "@/components/department/DepartmentName.vue";
import BarChart from "@/BarChart.vue";

export default {
  components: {DepartmentName, BarChart},
  data: function () {
    return {}
  }
}
</script>

<style>
#year {
  height: 1500px;
  width: 1500px;
}
</style>
