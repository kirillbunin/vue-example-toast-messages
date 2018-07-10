<template>
  <div>
    <nuxt/>
    <ToastWrap
      v-if="$store.state.toast.LIST"
      :toastArray="$store.state.toast.LIST"
      @remove="handleToastRemove"
    ></ToastWrap>
  </div>
</template>

<script>
  import ToastWrap from '~/components/ToastWrap.vue'

  export default {
    components: {
      ToastWrap
    },
    methods: {
      handleToastRemove (i) {
        this.$store.commit('toast/REMOVE_TOAST', i)
      }
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.button--grey {
  display: inline-block;
  /* border-radius: 4px; */
  border-bottom: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin: 0 8px;
  transition: all .1s ease;
}

.button--grey:hover {
  border-bottom-width: 3px;
}

.button--active {
  border-bottom: 3px solid #3b8070;
  color: #3b8070;
  pointer-events: none;
}

.button--big {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  color: #fff;
  background-color: #35495e;
  border: 0;
  cursor: pointer;
  font: inherit;
  font-size: 18px;
}
</style>
