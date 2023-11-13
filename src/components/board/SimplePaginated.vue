<template>
  <div>
    <DepartmentName></DepartmentName>
    <h1>{{ titleName }}</h1>
    <PaginatedList :list-array="pageArray"/>
  </div>
</template>

<script>
import axios from 'axios'
import PaginatedList from "@/components/board/Paginated-list.vue";
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  name: 'simple-pagination',
  components: {
    DepartmentName,
    PaginatedList
  },
  data() {
    return {
      titleName: '',
      pageArray: []
    }
  },
  created() {
    let path = window.location.pathname;
    axios.get(path)
        .then(response => {
          this.pageArray = response.data.contacts;
          this.titleName = response.data.titleName;
        });
  }
}
</script>

<style>
h1 {
  color: #454545;
  text-align: center;
}
</style>