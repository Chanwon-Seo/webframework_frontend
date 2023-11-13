<template>
  <div>
    <DepartmentName></DepartmentName>
    <h1>{{ titleName }}</h1>
    <DepartmentPaginatedList :list-array="pageArray"/>
  </div>
</template>

<script>
import axios from 'axios'
import DepartmentName from "@/components/department/DepartmentName.vue";
import DepartmentPaginatedList from "@/components/board/Department-Paginated-list.vue";

export default {
  name: 'department-simple-pagination',
  components: {
    DepartmentPaginatedList,
    DepartmentName,
  },
  data() {
    return {
      titleName: '',
      pageArray: [],
      memberStatus: '',
    }
  },
  created() {
    let path = window.location.pathname;
    axios.get(path)
        .then(response => {
          this.pageArray = response.data.contacts;
          this.titleName = response.data.titleName;
        })
  }
}
</script>

<style>
h1 {
  color: #454545;
  text-align: center;
}
</style>