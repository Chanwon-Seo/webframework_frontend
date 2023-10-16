<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>학과명 추가</h1>
    <form class="form-group" v-on:submit.prevent="submitForm">
      <input v-model="departmentName" type="text" class="form-control" placeholder="학과명">
      <input v-model="departmentCode" type="text" class="form-control" placeholder="학과코드">
      <input v-model="departmentImgUrl" type="text" class="form-control" placeholder="학과코드">
      <button type="submit" class="btn btn-primary">등록</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  data: function () {
    return {
      departmentName: '',
      departmentCode: '',
      departmentImgUrl: '',
    }
  },
  name: "MemberLogin",
  components: {DepartmentName},
  methods: {
    submitForm: function () {
      const url = '/admin/department/add';
      const data = {
        departmentName: this.departmentName,
        departmentCode: this.departmentCode,
        departmentImgUrl: this.departmentImgUrl,
      }
      const vm = this; // this를 vm 변수에 할당
      axios.post(url, data)
          .then(function (response) {
            console.log(response);
            console.log(response.data.message);
            location.href = "/admin"
          })
          .catch(function (error) {
            console.log(error.response.data);
            vm.errorText = error.response.data; // vm을 사용하여 에러 메시지를 설정
          });
    }
  }
}
</script>

<style>

</style>
