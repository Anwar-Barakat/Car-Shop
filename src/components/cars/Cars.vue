<template>
  <div class="row justify-content-evenly">
    <div
      class="col-md-6 col-lg-4 mb-4"
      v-for="(car, index) in carsInfo"
      :key="index"
    >
      <div class="card" style="width: 18rem">
        <img
          :src="getImageURL(car.name, car.mainImage)"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">
            {{ car.name.toUpperCase() }} | {{ car.model }}
          </h5>
          <p class="card-text">{{ car.price }}</p>
          <router-link :to="{ name: 'home' }">
            <button type="button" class="btn btn-primary">Read More</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarsVue",
  data() {
    return {
      carsInfo: this.$attrs.carsData,
    };
  },
  methods: {
    getImageURL(foldername, filename) {
      // let image = require.context("@/assets/");
      // return image("./" + foldername + "/" + filename);
      return require("@/assets/" + foldername + "/" + filename);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  img {
    height: 190px;
  }
}
</style>
