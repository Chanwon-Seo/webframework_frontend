<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>교직원 추가</h1>
    <form class="form-group" v-on:submit.prevent="submitForm">
      <input v-model="memberName" type="text" class="form-control" placeholder="이름">
      <input v-model="firstSSN" type="number" class="form-control" placeholder="생년월일">
      <input v-model="lastSSN" type="number" class="form-control" placeholder="주민번호">
      <input v-model="memberNumber" type="number" class="form-control" placeholder="아이디">
      <input v-model="password" type="number" class="form-control" placeholder="비밀번호">
      <input v-model="departmentName" type="text" class="form-control" placeholder="학과">
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
      memberName: '',
      memberNumber: '',
      password: '',
      departmentName: '',
      firstSSN: '',
      lastSSN: '',

    }
  },
  name: "MemberAddPage",
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
      const url = '/admin/member/add';
      const data = {
        memberName: this.memberName,
        memberNumber: this.memberNumber,
        password: this.password,
        departmentName: this.departmentName,
        firstSSN: this.firstSSN,
        lastSSN: this.lastSSN,
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
