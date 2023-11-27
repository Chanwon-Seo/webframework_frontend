<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>교직원 추가</h1>
    <form class="form-group" v-on:submit.prevent="submitForm">
      <input v-model="memberNewName" type="text" class="form-control" placeholder="이름">
      <input v-model="firstSSN" type="number" class="form-control" placeholder="생년월일">
      <input v-model="lastSSN" type="number" class="form-control" placeholder="주민번호">
      <input v-model="memberNumber" type="number" class="form-control" placeholder="아이디">
      <input v-model="password" type="text" class="form-control" placeholder="비밀번호">
      <select v-model="departmentName">
        <option class="form-control"
                v-for="(item, index) in selectList"
                :key="index"
                :value="item.value"
        >{{ item.name }}
        </option
        >
      </select>
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
      memberNewName: '',
      memberNumber: '',
      password: '',
      departmentName: '',
      firstSSN: '',
      lastSSN: '',
      selectList: [
        {name: "선택해주세요", value: ""},
        {name: "기계공학과", value: "mecheng"},
        {name: "기계설계공학과", value: "md"},
        {name: "메카트로닉스공학과", value: "mecha"},
        {name: "조선기계공학과", value: "sos"},
        {name: "항공기계공학과", value: "ame"},
        {name: "자동차공학과", value: "auto"},
        {name: "전기공학과", value: "ee"},
        {name: "전자공학과", value: "er"},
        {name: "정보통신공학과", value: "inc"},
        {name: "컴퓨터정보과", value: "cs"},
        {name: "컴퓨터시스템과", value: "cse"},
        {name: "건설환경공학과", value: "civil"},
        {name: "공간정보빅데이터과", value: "qisup"},
        {name: "건축학과", value: "archi"},
        {name: "실내건축과", value: "interior"},
        {name: "화학생명공학과", value: "ch"},
        {name: "재료공학과", value: "mse"},
        {name: "항공운항과", value: "cbncrew"},
        {name: "항공경영학과", value: "asm"},
        {name: "관광경영학과", value: "tour"},
        {name: "비서학과", value: "secretary"},
        {name: "호텔경영학관", value: "hotel"},
        {name: "산업디자인학과", value: "industrydesign"},
        {name: "패션디자인학과", value: "fashion"},
      ]
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
      const url = '/admin/member/add';
      let data = null;

      if (this.departmentName === "") {
        alert("학과를 추가해  주세요");
        location.href = "/admin/member/add"
      } else {
        data = {
          memberName: this.memberNewName,
          memberNumber: this.memberNumber,
          password: this.password,
          departmentName: this.departmentName,
          firstSSN: this.firstSSN,
          lastSSN: this.lastSSN,
        }
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
