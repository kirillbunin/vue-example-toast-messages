<template>
  <div class="pageNavigation">
    <nuxt-link to="/" class="button--grey" :class="{ 'button--active': $route.path === '/' }">Homepage</nuxt-link>
    <nuxt-link to="/about" class="button--grey" :class="{ 'button--active': $route.path === '/about' }">About</nuxt-link>
    <nuxt-link to="/contact" class="button--grey" :class="{ 'button--active': $route.path === '/contact' }">Contact</nuxt-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.pageNavigation {
  margin-bottom: 60px;
}
</style>
