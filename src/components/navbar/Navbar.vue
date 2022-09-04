<template>
  <nav class="navbar navbar-expand-sm">
    <a href="https://postimages.org/" class="navbar-brand" target="_blank"
      ><img
        src="https://i.postimg.cc/QCyRWB1P/IMG-20220826-172957-743-removebg-preview.png"
        border="0"
        alt="IMG-20220826-172957-743-removebg-preview"
    /></a>
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
        <router-link
          :to="{ name: 'Home', params: { pageTitle: 'Main Home' } }"
          exact
        >
          <li class="nav-item">
            <a class="nav-link" href="#" aria-current="page">Home</a>
          </li>
        </router-link>
        <router-link
          :to="{ name: 'categories', params: { pageTitle: 'Categories' } }"
        >
          <li class="nav-item">
            <a class="nav-link" href="#">Categories</a>
          </li>
        </router-link>
        <router-link :to="{ name: 'about', params: { pageTitle: 'About Us' } }">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </router-link>
        <router-link
          :to="{ name: 'contact', params: { pageTitle: 'Contact Us' } }"
        >
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
.navbar-brand {
  img {
    max-width: 40px;
  }
}

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
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 8px 0 rgba(94, 104, 245, 0.37);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
