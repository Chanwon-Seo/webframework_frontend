<template>
  <div>
    <DepartmentName></DepartmentName>
    <h1>공지사항</h1>
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
      pageArray: []
    }
  },
  created() {
    // axios.get('http://sample.bmaster.kro.kr/contacts')
    axios.get('/item/list')
        .then(response => {
          console.log(response);
          this.pageArray = response.data.contacts;
        })
        .catch(err => {
          console.log(err);
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