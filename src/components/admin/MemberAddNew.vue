<template>
  <div id="app">
    <DepartmentName></DepartmentName>
    <h1>신입생추가</h1>
    <div class="text-center">
      <input type="file" id="excelUpload" @change="importExcel"
             accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">

      <form class="form-group" v-on:submit.prevent="submitForm">
        <button type="submit" class="btn btn-primary">등록</button>
      </form>
    </div>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
import axios from "axios";
import DepartmentName from "@/components/department/DepartmentName.vue";

export default {
  components: {DepartmentName},
  data() {
    return {
      jsonList: [] // jsonList를 data 속성으로 추가
    };
  },
  methods: {
    importExcel(event) {
      const file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        let data = reader.result;
        let workbook = XLSX.read(data, {type: 'binary'});
        this.jsonList = [];

        workbook.SheetNames.forEach(sheetName => {
          const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          this.jsonList.push(...rows);
        });
      };
      reader.readAsBinaryString(file);
    },
    submitForm: function () {
      const url = '/admin/member/add/new';
      const vm = this;
      axios.post(url, this.jsonList)
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
};

</script>
