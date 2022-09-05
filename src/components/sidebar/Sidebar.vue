<template>
  <div class="sidebar">
    <nav class="nav flex-column sidebar-nav">
      <router-link :to="{ name: 'about' }">
        <li class="nav-item">
          <a class="nav-link active" href="#">Honda</a>
        </li>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <li class="nav-item">
          <a class="nav-link active" href="#">Toyota</a>
        </li>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <li class="nav-item">
          <a class="nav-link active" href="#">Mercedes</a>
        </li>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <li class="nav-item">
          <a class="nav-link active" href="#">BMW</a>
        </li>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <li class="nav-item">
          <a class="nav-link active" href="#">Chev</a>
        </li>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarVue",
};
</script>

<style lang="scss" scoped>
/* Google Font Import - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Cairo", sans-serif;
}

body {
  min-height: 100vh;
  font-family: "Cairo", sans-serif;
}
a {
  text-decoration: none;
}
.sidebar-nav {
  margin-top: 1rem;
  text-align: left;
  li {
    padding: 5px 10px 5px 0;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 7px 0 rgba(114, 115, 119, 0.37);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 0.5rem 0;
    a {
      color: #121212;
      font-size: 1.2rem;
    }
  }
}
</style>
