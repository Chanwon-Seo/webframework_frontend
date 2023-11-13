<template>
  <div>
    <DepartmentInfoCategory :temp="title"></DepartmentInfoCategory>
    <p class="jb-text">{{ title.departmentDetailText }}</p>
  </div>
</template>

<script>
import axios from "axios";
import DepartmentInfoCategory from "@/components/department/DepartmentInfoCateogry.vue";

export default {
  components: {DepartmentInfoCategory},
  data() {
    return {
      title: '',
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      let id = this.$route.params.id;
      axios.get(`/department/${id}`)
          .then((response) => {
            // 데이터를 가져왔을 때 할 작업
            this.title = response.data
          })
          .catch((error) => {
            console.error("데이터를 불러오는 동안 오류 발생:", error);
          });
    },
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        this.loadData();
      }
    },
  },
};
</script>

<style>
</style>
