<template>
  <div>
    <table>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>등록날짜</th>
      </tr>
      <tr v-for="p in paginatedData" :key="p.id">
        <td>{{ p.id }}</td>
        <td>{{ p.boardTitle }}</td>
        <td>{{ p.registrationDate }}</td>
      </tr>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
      <button @click="boardAdd" v-if="memberStatus === 'manager'" class="page-btn">
        추가
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'department-paginated-list',
  data() {
    return {
      pageNum: 0
    }
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    boardAdd() {
      let name = this.$route.params.name;
      window.location.href = "/department/board/add/" + name;
    }
  },
  created() {
    axios.get('/api/checkLoginStatus')
        .then(response => {
          if (response.data.loggedIn === true) {
            this.loggedIn = response.data.loggedIn;
            this.memberName = response.data.memberName;
            if (response.data.memberStatus === 2 && this.$route.params.name === response.data.departmentCode) {
              this.memberStatus = "manager"
            }
          } else {
            this.loggedIn = false;
          }
        })
        .catch(error => {
          console.error('Error checking login status:', error);
        });
  },
  computed: {
    pageCount() {
      let listLeng = this.listArray.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      return page;
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
          end = start + this.pageSize;
      return this.listArray.slice(start, end);
    }
  }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table th {
  font-size: 1.2rem;
}

table tr {
  height: 2rem;
  text-align: center;
  border-bottom: 1px solid #505050;
}

table tr:first-of-type {
  border-top: 2px solid #404040;
}

table tr td {
  padding: 1rem 0;
  font-size: 1.1rem;
}

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}

.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}

.btn-cover .page-count {
  padding: 0 1rem;
}
</style>