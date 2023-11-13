<template>
  <DepartmentName></DepartmentName>
  <ul>
    <router-link :to="{path:'/admin/member/add'}" class="nav-link">교직원추가</router-link>
    <router-link :to="{path:'/admin/department/add'}" class="nav-link">학과추가</router-link>
    <router-link :to="{path:'/admin/member/edit'}" class="nav-link">회원수정</router-link>
    <router-link :to="{path:'/admin/member/add/new'}" class="nav-link">신입생추가</router-link>
  </ul>
</template>

<script>

import axios from "axios";
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  name: "AdminMainPage",
  components: {DepartmentName},
  data() {
    return {
      loggedIn: false,
      memberName: '',
      memberStatus: '',
    };
  },
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
};
</script>
