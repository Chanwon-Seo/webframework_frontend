<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function () {
    return {
      title: "hello",
    };
  },
  name: "App",
  components: {},
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios.get("/all").then((res) => {
        this.title = res.data;
      });
    },
  }
}
</script>

<style>
</style>
