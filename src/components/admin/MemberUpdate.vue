<template>
  <DepartmentName></DepartmentName>
  <p>교직원수정 Page</p>
</template>

<script>

import axios from "axios";
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  name: "MemberUpdatePage",
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
          if (response.data.loggedIn === true) {
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
