<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>회원 정보</h1>
    <form class="form-group" v-on:submit.prevent="submitForm">
      <p class="textColor">{{ errorText }}</p>
      <input v-model="inputMemberNumber" type="number" class="form-control form-custom" placeholder="학번">
      <button type="submit" class="btn btn-primary">찾기</button>
    </form>

    <div class="div-custom">
      <p class="form-control form-custom">{{ findMemberName }}</p>
      <p class="form-control form-custom">{{ findMemberNumber }}</p>
      <p class="form-control form-custom">{{ findDepartmentName }}</p>
      <p class="form-control form-custom">{{ findFirstSSN }}</p>
      <p class="form-control form-custom">{{ findLastSSN }}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  data: function () {
    return {
      inputMemberNumber: 0,
      errorText: '',
      findMemberName: '성함',
      findMemberNumber: '학번',
      findDepartmentName: '소속학과',
      findFirstSSN: '생년월일',
      findLastSSN: '주민번호',
    }
  },
  name: "MemberAddPage",
  components: {DepartmentName},
  created() {
    axios.get('/api/checkLoginStatus')
        .then(response => {
          if (response.data.loggedIn === true && response.data.memberStatus === 1) {
            this.loggedIn = response.data.loggedIn;
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
      const url = '/admin/member/find';
      const data = {
        memberNumber: this.inputMemberNumber,
      }
      const vm = this; // this를 vm 변수에 할당
      axios.post(url, data)
          .then(function (data) {
            vm.findMemberName = data.data.memberName;
            vm.findMemberNumber = data.data.memberNumber;
            vm.findDepartmentName = data.data.departmentName;
            vm.findFirstSSN = data.data.firstSSN;
            vm.findLastSSN = data.data.lastSSN;
            vm.errorText = "";
          })
          .catch(function (error) {
            vm.errorText = error.response.data; // vm을 사용하여 에러 메시지를 설정
          });
    }
  }
}
</script>

<style>
.div-custom {
  margin: 30px;
}

.form-custom {
  width: 200px;
}

.textColor {
  color: red;
}
</style>
