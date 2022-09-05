<template>
  <div class="home container">
    <div class="row mt-4">
      <div class="col-2">
        <SidebarVue />
      </div>
      <div class="col-10">
        <CarsVue />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarVue from "@/components/sidebar/Sidebar.vue";
import CarsVue from "@/components/cars/Cars.vue";

const components = {
  SidebarVue,
  CarsVue,
};

export default {
  name: "HomeView",
  components: components,
};
</script>
