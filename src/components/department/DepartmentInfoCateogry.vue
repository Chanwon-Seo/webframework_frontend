<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler px-0" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample2" aria-controls="navbarExample2" aria-expanded="false"
              aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarExample2" style="background-color: skyblue">
        <ul class="navbar-nav me-auto ps-lg-0" style="padding-left: 0.15rem">
          <li class="nav-item">
            <a href="/"><img src="https://www.inhatc.ac.kr/sites/kr/intro01/images/img-logo.png" alt="logo"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="temp.departmentDetailUrl">학과소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="temp.departmentInfoCategoryBoardUrl">커뮤니티</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "DepartmentInfoCategory",
  components: {},
  props: {
    temp: {
      require: false,
    }
  }
}

</script>
