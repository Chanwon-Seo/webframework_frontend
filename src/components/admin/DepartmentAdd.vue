<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>학과 추가</h1>
    <form class="form-group" v-on:submit.prevent="submitForm">
      <input v-model="departmentName" type="text" class="form-control" placeholder="학과명">
      <input v-model="departmentCode" type="text" class="form-control" placeholder="학과코드">
      <!-- 학과 소개     -->
      <input v-model="departmentImgUrl" type="text" class="form-control" placeholder="백그라운드이미지URL">
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
  created() {
    axios.get('/api/checkLoginStatus')
        .then(response => {
          if (response.data.loggedIn === true && response.data.memberStatus === 1) {
            this.loggedIn = response.data.loggedIn;
            this.memberName = response.data.memberName;
          } else {
            alert("관리자만 접근이 가능합니다");
            location.href = "/";
          }
        })
        .catch(error => {
          console.error('Error checking login status:', error);
        });
  },
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
          .then(function () {
            location.href = "/admin"
          })
          .catch(function (error) {
            vm.errorText = error.response.data; // vm을 사용하여 에러 메시지를 설정
          });
    }
  }
}
</script>

<style>

</style>
