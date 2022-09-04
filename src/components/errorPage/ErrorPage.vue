<template>
  <div class="error-page">
    <h1>Error</h1>
    <button class="btn btn-info" @click="goBack()">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "ErrorPageVue",
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
