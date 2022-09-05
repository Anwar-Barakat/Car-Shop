<template>
  <div class="home container">
    <div class="row">
      <div class="col-2">
        <SidebarVue />
      </div>
      <div class="col-10"></div>
    </div>
  </div>
</template>

<script>
import SidebarVue from "@/components/sidebar/Sidebar.vue";

const components = {
  SidebarVue,
};

export default {
  name: "HomeView",
  components: components,
};
</script>
