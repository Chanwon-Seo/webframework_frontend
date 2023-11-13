<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <div class="login-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login">
              <h1>로그인</h1>
              <form class="form-group" v-on:submit.prevent="submitForm">
                <p class="textColor">{{ errorText }}</p>
                <input v-model="memberNumber" type="number" class="form-control" placeholder="아이디">
                <input v-model="password" type="password" class="form-control" placeholder="비밀번호">
                <button type="submit" class="btn btn-primary">로그인</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  data: function () {
    return {
      memberNumber: '',
      password: '',
      errorText: '',
    }
  },
  name: "MemberLogin",
  components: {DepartmentName},
  methods: {
    submitForm: function () {
      const url = '/login';
      const data = {
        memberNumber: this.memberNumber,
        password: this.password,
      }
      if (this.memberNumber === '' || this.password === '') {
        alert("입력 값에 문제가 있습니다.")
        return
      }
      const vm = this; // this를 vm 변수에 할당
      axios.post(url, data)
          .then(function (response) {
            console.log(response);
            console.log(response.data.message);
            location.href = "/"
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
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group {
  input {
    margin-bottom: 20px;
  }
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  h1 {
    margin-bottom: 1.5rem;
  }
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}

.textColor {
  color: red;
}
</style>
