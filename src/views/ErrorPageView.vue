<template>
  <div class="error-page">
    <div class="container">
      <ErrorPageVue />
    </div>
  </div>
</template>

<script>
import ErrorPageVue from "@/components/errorPage/ErrorPage.vue";

const components = {
  ErrorPageVue,
};

export default {
  name: "ErrorPageView",
  components: components,
};
</script>
