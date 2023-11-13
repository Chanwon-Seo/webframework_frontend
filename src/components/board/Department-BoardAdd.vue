<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>학과글 추가</h1>
    <form class="form-group" v-on:submit.prevent="submitForm">
      <input v-model="boardTitle" type="text" class="form-control" placeholder="제목">
      <input v-model="boardDetail" type="text" class="form-control" placeholder="상세내용">
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
      boardTitle: '',
      boardDetail: '',
    }
  },
  name: "Department-BoardAddPage",
  components: {DepartmentName},
  created() {
    axios.get('/api/checkLoginStatus')
        .then(response => {
          if (response.data.loggedIn === true && response.data.memberStatus === 2 && this.$route.params.name === response.data.departmentCode) {
            this.loggedIn = response.data.loggedIn;
            this.memberName = response.data.memberName;
          } else {
            alert("권한이 없습니다.");
            location.href = "/";
          }
        })
        .catch(error => {
          console.error('Error checking login status:', error);
        });
  },
  methods: {
    submitForm: function () {
      let name = this.$route.params.name
      const url = '/department/board/add/' + name;
      const data = {
        boardTitle: this.boardTitle,
        boardDetail: this.boardDetail,
      }
      const vm = this; // this를 vm 변수에 할당
      axios.post(url, data)
          .then(function () {
            location.href = "/department/board/list/" + name;
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
