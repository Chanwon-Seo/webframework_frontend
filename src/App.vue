<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
    };
  },
  name: "App",
  components: {},
  mounted() {
    this.load();
  },
  methods: {}
}
</script>

<style>
</style>
