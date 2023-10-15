<template>
  <DepartmentName></DepartmentName>
  <img class="imageSize" src="../assets/mainImage.png">
</template>


<script>
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  name: 'MainPage',
  methods: {},
  components: {DepartmentName},
  data() {
    return {}
  },
}
</script>

<style>
.imageSize {
  height: 1000px;
  width: 1800px;
}
</style>
