<template>
  <nav class="navbar navbar-expand-sm">
    <a class="navbar-brand" href="#">Cars</a>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mt-2 mt-lg-0">
        <router-link :to="{ name: 'Home' }" exact>
          <li class="nav-item">
            <a class="nav-link" href="#" aria-current="page">Home</a>
          </li>
        </router-link>
        <router-link :to="{ name: 'categories' }">
          <li class="nav-item">
            <a class="nav-link" href="#">Categories</a>
          </li>
        </router-link>
        <router-link :to="{ name: 'about' }">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.navbar-expand-sm {
  .collapse.navbar-collapse {
    display: flex;
    justify-content: flex-end;
    .navbar-nav {
      gap: 2rem;
    }
  }
}
.router-link-exact-active.router-link-active {
  background: red;
}
</style>
