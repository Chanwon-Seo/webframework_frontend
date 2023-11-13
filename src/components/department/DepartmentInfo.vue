<template>
  <div>
    <DepartmentInfoCategory :temp="title"></DepartmentInfoCategory>
    <img class="imageSize" :src="title.departmentImgUrl">
    <h1 class="jb-text">{{ title.departmentName }}</h1>
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
      console.log(id);
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

.jb-text {
  padding: 5px 10px;
  background-color: yellow;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
}

.imageSize {
  height: 1000px;
  width: 1800px;
}
</style>
