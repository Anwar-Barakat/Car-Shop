<template>
  <div class="home container">
    <div class="row mt-4">
      <div class="col-lg-2 mb-3">
        <SidebarVue :carsData="cars" />
      </div>
      <div class="col-lg-10 col-12 col-md-6">
        <CarsVue :carsData="cars" />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarVue from "@/components/sidebar/Sidebar.vue";
import CarsVue from "@/components/cars/Cars.vue";
import getCarsJSON from "@/json/cars.json";

const components = {
  SidebarVue,
  CarsVue,
};

export default {
  name: "HomeView",
  data() {
    return {
      cars: getCarsJSON,
    };
  },
  components: components,
};
</script>
