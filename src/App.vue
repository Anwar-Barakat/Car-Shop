<template>
  <div id="app">
    <div id="app" class="container">
      <MainMenu />
    </div>
    <router-view />
  </div>
</template>

<script>
import MainMenu from "@/components/navbar/Navbar.vue";

const components = {
  MainMenu,
};

export default {
  components: components,
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
